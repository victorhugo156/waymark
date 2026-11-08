import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
margin-top: 1rem;
margin-bottom: .5rem;

padding: 1.5rem;

border-radius: 1rem;
border: 1px solid ${props => props.theme.colors.border};

`

export const ContainerStepsJourney = styled.div`
display: flex;
gap: 1rem;

`

export const CircleIcon = styled.div`
background-color: ${props => props.theme.colors.primary};

width: 2.5rem;
height: 2.5rem;

display: flex;
flex-shrink: 0;
justify-content: center;
align-items: center;

border-radius: 50%;

`

export const StepJourney = styled.p`
margin: 0;

font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors.foreground};

line-height: 1;

`

export const StepJourneyDescription = styled.div`
width: 100%;

display: flex;
flex-direction: column;
gap: .25rem;

`

export const StationTitle = styled.h3`
font-size: ${props => props.theme.fontSizes.xs};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors.foreground};

line-height: 1.2;

@media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.base};
    line-height: 1.5;
}

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.5;
}

`

export const TransportInformation = styled.p`

font-size: ${props => props.theme.fontSizes.xxs};
font-weight: ${props => props.theme.fontWeights.regular};
color: ${props => props.theme.colors.mutedForeground};

line-height: 1.5;

@media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: 1.5;
}

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes.lg};
    line-height: 1.5;
}

`

export const ContainerAccessibilityInformation = styled.ul`
width: 100%;

display: flex;
flex-direction: column;
gap: 0.5rem;

@media (min-width: 768px) {
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 1rem;
}

`

export const AccessibilityInformation = styled.li`

display: flex;
align-items: center;
gap: 0.5rem;

`

export const ValidationIcon = styled.span`

font-size: ${props => props.theme.fontSizes.xs};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors.green};

@media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.sm};
}

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes.base};
}

`

export const AccessibilityInformationText = styled.p`

font-size: ${props => props.theme.fontSizes.xs};
font-weight: ${props => props.theme.fontWeights.medium};
color: ${props => props.theme.colors.foreground};

line-height: 1.2;

@media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.sm};
}

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes.base};
}

`