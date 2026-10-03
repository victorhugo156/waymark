import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: column;

border-radius: 1rem;
border: 1px solid ${props => props.theme.colors.border};
`

export const ContainerImage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

aspect-ratio: 16 / 9;
overflow: hidden;

background-color: ${props => props.theme.colors.muted};
border-radius: 1rem;

`

export const Image = styled.img<{ $hasImage: boolean }>`
  width: ${({ $hasImage }) => ($hasImage ? "100%" : "96px")};
  height: ${({ $hasImage }) => ($hasImage ? "auto" : "96px")};
`

export const NoImage = styled.span<{ $hasImage: boolean }>`
display: ${({ $hasImage }) => ($hasImage ? "none" : "block")};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.medium};
color: ${props => props.theme.colors.mutedForeground};
text-align: center;
padding: 0.5rem;

`

export const ContainerCardDescription = styled.div`
width: 100%;
display: flex;
flex-direction: column;

gap: 1rem;

padding: 1rem;
`
export const Tag = styled.span`
width: 100%;
display: flex;
justify-content: space-between;
gap: 0.5rem;
`

export const TagText = styled.span`
font-size: ${props => props.theme.fontSizes.lg};
font-weight: ${props => props.theme.fontWeights.semibold};
color: ${props => props.theme.colors.mutedForeground};

letter-spacing: 0.05em;

text-transform: uppercase;
`

export const Rating = styled.span`
font-size: ${props => props.theme.fontSizes.lg};
font-weight: ${props => props.theme.fontWeights.semibold};
color: ${props => props.theme.colors.foreground};

letter-spacing: 0.05em;

`

export const CardInfo = styled.div`

width: 100%;
min-width: 0;
display: flex;
flex-direction: column;
gap: 0.5rem;
`

export const Title = styled.h3`
font-size: ${props => props.theme.fontSizes['2xl']};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors.foreground};
line-height: 1.2;
letter-spacing: 0.05em;


`

export const Location = styled.span`

font-size: ${props => props.theme.fontSizes.lg};
font-weight: ${props => props.theme.fontWeights.regular};
color: ${props => props.theme.colors.mutedForeground};

letter-spacing: 0.05em;

`

export const ButtonsContainer = styled.div`
width: 100%;

margin-top: 1rem;

display: flex;
flex-direction: column;
gap: 1rem;
`
