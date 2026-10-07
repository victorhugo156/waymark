import type { Journey } from '@/utils/mockJourney'
import {
    Container,
    ContainerStepsJourney,
    CircleIcon,
    StepJourney,
    StepJourneyDescription,
    StationTitle,
    TransportInformation,
    ContainerAccessibilityInformation,
    AccessibilityInformation,
    ValidationIcon,
    AccessibilityInformationText
} from './styles'


interface CardJourneyProps {
    journey: Journey;
}

export function CardJourney({ journey }: CardJourneyProps) {

    const labels = {
        wheelchairAccess: "Wheelchair access",
        accessibleVehicle: "Accessible vehicle",
        lowFloorVehicle: "Low-floor vehicle",
        liftAvailable: "Lift available",
        stairFree: "Step-free route",
    }

    const steps = [...journey.steps];
    


    return (

        <>
            {
              
                steps.map((step) => (
                    
                    <Container>
                        <ContainerStepsJourney>
                            <CircleIcon>
                                <StepJourney>{step.order}</StepJourney>
                            </CircleIcon>

                            <StepJourneyDescription>
                                <StationTitle>{step.title}</StationTitle>
                                <TransportInformation>{step.subtitle}</TransportInformation>
                                <ContainerAccessibilityInformation>
                                    {
                                        // accessibility is an object, not a list, so it has no .map.
                                        // Object.entries turns each feature into a pair: ["wheelchairAccess", "yes"].
                                        // name is the feature. value is "yes", "no", or "unknown".
                                        Object.entries(step.accessibility).map(([name, value]) => {
                                            if (value === "unknown" || typeof value === "boolean") return null
                                              
                                            return (
                                                
                                                <AccessibilityInformation key={name}>
                                                    <ValidationIcon aria-hidden="true">{value === "yes" ? "✔" : "✖"}</ValidationIcon>
                                                    <AccessibilityInformationText>
                                                        {labels[name as keyof typeof labels]}
                                                    </AccessibilityInformationText>
                                                </AccessibilityInformation>

                                                
                                            )
                                        })
                                    }
                                </ContainerAccessibilityInformation>
                            </StepJourneyDescription>
                        </ContainerStepsJourney>
                    </Container>
                ))
            }

        </>
    )
}
