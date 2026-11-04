import { Input } from "@/components/inputs/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { mockJourney } from "@/utils/mockJourney"
import { getPlaceById } from "@/services/places"
import { getPlaces } from "@/services/api"
import { z } from "zod"

import {
    Main,
    SectionJourney,
    Title,
    Form,
    Field,
    Label,
    SectionJourneyResult,
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


export function Journey() {

    const [error, setError] = useState<string | null>(null)

    const [searchParams] = useSearchParams()

    const destinationID: string | null = searchParams.get("destination")


    const { register, handleSubmit, setValue, formState: { errors }, } = useForm<JourneyFormSchema>({
        resolver: zodResolver(journeySchema),
        defaultValues: {
            origin: "",
            destination: "",
        }
    })

    async function handleJourneySearch(data: JourneyFormSchema) {
        console.log(data);
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
                    {errors.origin && ( <p role="alert">{errors.origin.message}</p>)}

                    <Field>
                        <Label htmlFor="destination">To</Label>
                        <Input id="destination" {...register('destination')} placeholder="To" type="text" autoComplete="off" />
                    </Field>
                    {errors.destination && ( <p role="alert">{errors.destination.message}</p>)}

                    <Button type="submit">Search Journey</Button>
                </Form>
            </SectionJourney>

            <SectionJourneyResult>
                {
                    mockJourney ?
                        <>
                            <TitleJourney>{mockJourney.id}</TitleJourney>
                            <TextJourney>
                                {mockJourney.summary.transportModes.join(" → ")} - Approx - {mockJourney.summary.durationMinutes} minutes - {mockJourney.summary.interchanges} interchanges
                            </TextJourney>
                            <CardJourney key={mockJourney.id} journey={mockJourney} />
                        </>

                        :
                        <p>No journey found</p>
                }
            </SectionJourneyResult>
        </Main>
    )
}
