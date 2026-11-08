import styled from "styled-components";

export const Main = styled.main`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;

padding: 1.25rem;

`

export const SectionJourney = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

`

export const Title = styled.h1`
font-size: ${props => props.theme.fontSizes.xl};
font-weight: ${props => props.theme.fontWeights.extrabold};

`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

@media (min-width: 1024px) {
    flex-direction: row;
    align-items: end;
}

`

export const Field = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

export const Label = styled.label`

color: ${props => props.theme.colors.foreground};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.semibold};
letter-spacing: 0.05em;

`

export const SectionJourneyResult = styled.section`

display: flex;
flex-direction: column;
gap: 1rem;

`

export const ContainerJourney = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`

export const TitleJourney = styled.h2`

font-size: ${props => props.theme.fontSizes.xs};
font-weight: ${props => props.theme.fontWeights.extrabold};

line-height: 1.5;

@media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.base};
    line-height: 1.5;
}

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.5;
}

`

export const TextJourney = styled.p`

font-size: ${props => props.theme.fontSizes.xxs};
font-weight: ${props => props.theme.fontWeights.regular};
color: ${props => props.theme.colors.mutedForeground};

@media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.sm};
}

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes.base};
}

`