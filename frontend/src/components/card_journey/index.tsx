
import {
    Container,
    ContainerStepsJourney,
    CircleIcon,
    StepJourney,
    StepJourneyDescription,
    StationTitle,
    TransportInformation,
    ContainerAccessibilityInformation,
} from './styles'
import { AccessibilityStatus } from '@/components/accessibility_status'

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


interface CardJourneyProps {
    journey: Journey
}

type AccessibilityStatus = 'yes' | 'no' | 'unknown'

interface Journey {
    id: string
    accessibilityStatus: AccessibilityStatus
    totalDurationMinutes: number | null
    interchanges: number
    legs: JourneyLeg[]
}

export function CardJourney({ journey }: CardJourneyProps) {

    const labels = {
        wheelchairAccess: "Wheelchair access",
        accessibleVehicle: "Accessible vehicle",
        lowFloorVehicle: "Low-floor vehicle",
        liftAvailable: "Lift available",
        stairFree: "Step-free route",
        originWheelchairAccess: 'Boarding stop wheelchair access',
        destinationWheelchairAccess: 'Arrival stop wheelchair access',
    }

    const steps = journey.legs;

    return (
        <>

            {steps.map((leg, index) => {
                const accessibility = {
                    wheelchairAccess: leg.wheelchairAccess,
                    lowFloorVehicle: leg.lowFloorVehicle,
                    originWheelchairAccess: leg.originWheelchairAccess,
                    destinationWheelchairAccess: leg.destinationWheelchairAccess,
                }

                return (
                    <Container key={index}>
                        <ContainerStepsJourney>
                            <CircleIcon>
                                <StepJourney>{index + 1}</StepJourney>
                            </CircleIcon>

                            <StepJourneyDescription>
                                <StationTitle>{leg.from}</StationTitle>
                                <TransportInformation>
                                    {leg.line ?? leg.mode} — {leg.to}
                                </TransportInformation>

                                <ContainerAccessibilityInformation>
                                    {Object.entries(accessibility).map(([name, value]) => (
                                        <AccessibilityStatus
                                            key={name}
                                            label={labels[name as keyof typeof labels]}
                                            status={value}
                                        />
                                    ))}
                                </ContainerAccessibilityInformation>
                            </StepJourneyDescription>
                        </ContainerStepsJourney>
                    </Container>

                )
            })
            }
        </>


    )



}
