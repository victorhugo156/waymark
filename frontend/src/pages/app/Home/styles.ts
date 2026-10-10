import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: column;
gap: .5rem;

`

export const HeroSection = styled.section`
background-color: ${props => props.theme.colors.foreground};
width: 100%;

display: flex;
flex-direction: column;

@media (min-width: 1024px) {
  flex-direction: row-reverse;
}

`

export const Hero = styled.div`
width: 100%;
display: flex;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;


/* @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

`

export const HeroContent = styled.div`
background-color: ${props => props.theme.colors.foreground};
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

padding: 1.25rem;

box-sizing: border-box;

@media (min-width: 768px) {
  gap: 1rem;
}

@media (min-width: 1024px) {

  padding: 2rem;
}

@media (min-width: 1280px) {
  gap: 3rem;
  justify-content: end;

}

`

export const Content = styled.div`
max-width: 32.5rem;

display: flex;
flex-direction: column;
gap: 1rem;

`

export const HeroEyebrow = styled.p`
color: ${props => props.theme.colors.primary};
font-size: 1rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;

@media (min-width: 1280px) {
  font-size: ${props => props.theme.fontSizes.lg};

}

`

export const HeroTitle = styled.h1`
color: ${props => props.theme.colors.muted};
font-size: 2rem;
font-weight: 700;
letter-spacing: 0.05em;

@media (min-width: 1280px) {
  font-size: ${props => props.theme.fontSizes["4xl"]};
  line-height: 1;

}

`

export const HeroDescription = styled.p`
color: ${props => props.theme.colors.muted};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: 400;
line-height: 1.5;

@media (min-width: 1280px) {
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.5;

}

`

export const ActionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

@media (min-width: 768px) {
  flex-direction: row;
}

`

export const Main = styled.main`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;

padding: 1.25rem;
`	

export const CategoriesSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

@media (min-width: 768px) {

}

`

export const CategoriesTitle = styled.h3`
color: ${props => props.theme.colors.mutedForeground};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.bold};
letter-spacing: 0.05em;
text-transform: uppercase;

`

export const ContainerToggleGroupCategories = styled.div`
width: 100%;
display: flex;
gap: 1rem;

@media (min-width: 768px) {
  flex-direction: row;
}

@media (min-width: 1024px) {
  gap: 2rem;
}

@media (min-width: 1280px) {
  gap: 3rem;
}
`

export const PlacesSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
`

export const ContainerPlacesTitle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: .5rem;

`

export const PlacesTitle = styled.h3`
color: ${props => props.theme.colors.foreground};
font-size: ${props => props.theme.fontSizes["2xl"]};
font-weight: ${props => props.theme.fontWeights.extrabold};
line-height: 1.2;

`

export const PlacesDescription = styled.p`
color: ${props => props.theme.colors.mutedForeground};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.medium};
line-height: 1.5;

`

export const Cards = styled.ul`
width: 100%;
display: grid;
flex-direction: column;
gap: 1rem;

@media (min-width: 768px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (min-width: 1280px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
`

export const JourneySection = styled.section`
background-color: ${props => props.theme.colors.muted};
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

padding: 1.25rem;

`

export const JourneyTag = styled.p`
color: ${props => props.theme.colors.mutedForeground};
font-size: ${props => props.theme.fontSizes.lg};
font-weight: ${props => props.theme.fontWeights.bold};

letter-spacing: 0.05em;
text-transform: uppercase;
`

export const JourneyTitle = styled.h3`
color: ${props => props.theme.colors.foreground};
font-size: ${props => props.theme.fontSizes["2xl"]};
font-weight: ${props => props.theme.fontWeights.extrabold};
line-height: 1.2;

`

export const JourneyDescription = styled.p`
color: ${props => props.theme.colors.mutedForeground};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.medium};
line-height: 1.5;

`

export const ContainerJourneyForm = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;


@media (min-width: 1024px) {
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}


`

export const Label = styled.label`

color: ${props => props.theme.colors.foreground};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.semibold};
letter-spacing: 0.05em;

`

