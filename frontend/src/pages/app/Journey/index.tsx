import { Input } from "@/components/inputs/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { mockJourney } from "@/utils/mockJourney"

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


export function Journey() {

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    return (
        <Main>
            <SectionJourney>
                <Title>Plan an accessible journey</Title>
                <Form>
                    <Field>
                        <Label htmlFor="from">From</Label>
                        <Input id="from" placeholder="From" type="text" value="" name="from" autoComplete="off" onChange={() => { }} />
                    </Field>

                    <Field>
                        <Label htmlFor="to">To</Label>
                        <Input id="to" placeholder="To" type="text" value="" name="to" autoComplete="off" onChange={() => { }} />
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
