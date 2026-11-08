import { Input } from "@/components/inputs/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { getPlaceById } from "@/services/places"
import { getJourneys } from "@/services/journeys"
import { z } from "zod"

import {
    Main,
    SectionJourney,
    Title,
    Form,
    Field,
    Label,
    SectionJourneyResult,
    ContainerJourney,
    TitleJourney,
    TextJourney
} from "./styles"
import { CardJourney } from "@/components/card_journey"
import { useSearchParams } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


const journeySchema = z.object({
    origin: z.string().trim().min(1, 'Origin is required'),
    destination: z.string().trim().min(1, 'Destination is required'),
})

export type JourneyFormSchema = z.infer<typeof journeySchema>;

interface Journey {
    id: string
    accessibilityStatus: 'yes' | 'no' | 'unknown'
    totalDurationMinutes: number | null
    interchanges: number
    legs: JourneyLeg[]
}

type AccessibilityStatus = 'yes' | 'no' | 'unknown'

interface JourneyLeg {
    from: string
    to: string
    mode: string
    line?: string
    destinationWheelchairAccess: AccessibilityStatus
    originWheelchairAccess: AccessibilityStatus
    wheelchairAccess: AccessibilityStatus
    lowFloorVehicle: AccessibilityStatus
    arrivalTime: string
    departureTime: string
    durationMinutes: number | null
}


export function Journey() {

    const [journeys, setJourneys] = useState<Journey[]>([])
    const [error, setError] = useState<string | null>(null)

    const [searchParams] = useSearchParams()
    const origin = searchParams.get('origin')
    const destination = searchParams.get('destination')

    const destinationID: string | null = searchParams.get("destination")


    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<JourneyFormSchema>({
        resolver: zodResolver(journeySchema),
        defaultValues: {
            origin: origin ?? "",
            destination: destination ?? "",
        }
    })

    async function handleJourneySearch(data: JourneyFormSchema) {
        try {
            const response = await getJourneys(data)
            setJourneys(response.journey)
            reset()
        } catch (error) {
            console.error('Failed to retrieve journeys:', error)
        }
    }

    useEffect(() => {

        async function getDestination() {
            if (!destinationID) {
                return
            }

            try {
                const response = await getPlaceById(destinationID)
                setValue('destination', response.name, { shouldValidate: true, })

            } catch (error) {
                setError('Unable to load featured places.')
            }
        }

        void getDestination()

    }, [destinationID, setValue])


    return (
        <Main>
            <SectionJourney>
                <Title>Plan an accessible journey</Title>
                <Form onSubmit={handleSubmit(handleJourneySearch)}>
                    <Field>
                        <Label htmlFor="origin">From</Label>
                        <Input id="origin" {...register('origin')} placeholder="from" type="text" autoComplete="off" />
                    </Field>
                    {errors.origin && (<p role="alert">{errors.origin.message}</p>)}

                    <Field>
                        <Label htmlFor="destination">To</Label>
                        <Input id="destination" {...register('destination')} placeholder="To" type="text" autoComplete="off" />
                    </Field>
                    {errors.destination && (<p role="alert">{errors.destination.message}</p>)}

                    <Button type="submit">Search Journey</Button>
                </Form>
            </SectionJourney>

            <SectionJourneyResult>
                {
                    journeys ?
                        <>
                            {journeys.map((journey) => {
                                const firstLeg = journey.legs[0]
                                const lastLeg = journey.legs.at(-1)

                                return (
                                    <ContainerJourney key={journey.id}>
                                        <TitleJourney>{firstLeg?.from} → {lastLeg?.to}</TitleJourney>
                                        <TextJourney>
                                            {firstLeg.mode} → Approx  {journey.totalDurationMinutes} minutes → {journey.interchanges} interchanges
                                        </TextJourney>
                                        <CardJourney journey={journey} />
                                    </ContainerJourney>
                                )

                            })}
                        </>
                        :
                        <p>No journey found</p>
                }
            </SectionJourneyResult>
        </Main>
    )
}
