import styled from "styled-components";

export const Main = styled.main`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;

padding: 1.25rem;
`	

export const ExploreContainer = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

`

export const Title = styled.h1`
font-size: ${props => props.theme.fontSizes['3xl']};
font-weight: ${props => props.theme.fontWeights.extrabold};
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

export const SearchContainer = styled.div``

export const ResultsContainer = styled.div``

export const SectionFilters = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

`

export const FiltersTitle = styled.h2``

export const FiltersContainer = styled.div``

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

