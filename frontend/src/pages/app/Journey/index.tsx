import { Input } from "@/components/inputs/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { mockJourney } from "@/utils/mockJourney"
import { getPlaceById } from "@/services/places"
import { getPlaces} from "@/services/api"

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


export function Journey() {

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [destination, setDestination] = useState("")
    const [error, setError] = useState<string | null>(null)

    const [searchParams] = useSearchParams()

    const destinationID: string | null = searchParams.get("destination")
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, from: string) => {
        e.preventDefault();

        console.log('To:', to);

        const data = await getPlaces(to);

        console.log(data);
    }

    useEffect(() => {

        async function getDestination() {
            if(!destinationID){
                return
            }

            try {
                const response = await getPlaceById(destinationID)
                setDestination(response.name)

            } catch (error) {
                setError('Unable to load featured places.')

            }

        }

        void getDestination()

    }, [destinationID])


    return (
        <Main>
            <SectionJourney>
                <Title>Plan an accessible journey</Title>
                <Form onSubmit={(e) => handleSubmit(e, from)}>
                    <Field>
                        <Label htmlFor="from">From</Label>
                        <Input id="from" placeholder="from" type="text" value={from} name="from" autoComplete="off" onChange={(e) => setFrom(e.target.value)} />
                    </Field>

                    <Field>
                        <Label htmlFor="to">To</Label>
                        <Input id="to" placeholder= "To" type="text" value={destination} name="to" autoComplete="off" onChange={(e) => setDestination(e.target.value)} />
                    </Field>

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
