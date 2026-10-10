import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: .5rem;

padding: 1.25rem;

`

export const PlacePhotos = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: .5rem;

margin-bottom: 1.25rem;

@media (min-width: 1024px) {
flex-direction: row;
align-items: stretch;
}


`

export const CoverPhoto = styled.img`
border-radius: 1rem;

object-fit: cover;

@media (min-width: 768px) {
    width: 100%;
    max-height: 17.5rem;
}

@media (min-width: 1024px) {
    flex: 2;
    min-width: 0;
    width: auto;
    height: 17.5rem;
    max-height: none;
}

`

export const PhotoRow = styled.div`
display: none;

@media (min-width: 768px) {
    display: flex;
    width: 100%;
    gap: .5rem;
}

@media (min-width: 1024px) {
    flex: 1;
    min-width: 0;
    width: auto;
    height: 17.5rem;
    flex-direction: column;
}

`

export const PreviewPhoto = styled.img`
flex: 1;
min-width: 0;
width: 100%;
object-fit: cover;

border-radius: 1rem;

@media (min-width: 1024px) {
    flex: 1;
    min-height: 0;
    height: auto;
}

`


export const TitlePlace = styled.h1`

font-size: ${({ theme }) => theme.fontSizes["2xl"]};
font-weight: ${({ theme }) => theme.fontWeights.extrabold};
color: ${({ theme }) => theme.colors.foreground};


`

export const DescriptionPlace = styled.p`

font-size: ${({ theme }) => theme.fontSizes.base};
color: ${({ theme }) => theme.colors.mutedForeground};

`


export const AccessibilitySection = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const AccessibilityPlaceDescriptionMobile = styled.div`
display: none;


`

export const AccessibilityPlaceDescription = styled.p`

font-size: ${({ theme }) => theme.fontSizes.base};
color: ${({ theme }) => theme.colors.foreground};


`

export const AccessibilityMap = styled.div``


export const Tag = styled.div`

`

export const Map = styled.div`

`

export const AccessibilityInfo = styled.div`
background-color: ${({ theme }) => theme.colors.foreground};

display: flex;
flex-direction: column;
gap: 1rem;

padding: 1.25rem;

border-radius: 1rem;

`

export const HeaderAccessibilityInfo = styled.div`
display: flex;
gap: 1rem;

@media (min-width: 768px) {
    justify-content: space-between;
}

`

export const TitleAccessibilityInfo = styled.h2`
font-size: ${({ theme }) => theme.fontSizes.xl};
font-weight: ${({ theme }) => theme.fontWeights.extrabold};
color: ${({ theme }) => theme.colors.background};

line-height: 1;

`

export const AccessibilityListTitle = styled.h3`

font-size: ${({ theme }) => theme.fontSizes.xs};
color: ${({ theme }) => theme.colors.background};
font-weight: ${({ theme }) => theme.fontWeights.bold};

text-transform: uppercase;

`

export const AccessibilityInfoContentMobility = styled.ul`
display: flex;
flex-direction: column;
gap: .5rem;
`

export const AccessibilityInfoContentItem = styled.li`
font-size: ${({ theme }) => theme.fontSizes.base};
font-weight: ${({ theme }) => theme.fontWeights.semibold};
color: ${({ theme }) => theme.colors.primary};
`



export const AccessibilityInfoContentPhysicalAccess = styled.ul`
display: flex;
flex-direction: column;
gap: .5rem;
`

export const ContainerCommunityReviews = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

margin-top: 1.25rem;
`

export const TitleCommunityReviews = styled.h3`
font-size: ${({ theme }) => theme.fontSizes.xs};
font-weight: ${({ theme }) => theme.fontWeights.extrabold};
color: ${({ theme }) => theme.colors.mutedForeground};

text-transform: uppercase;
`

export const ContainerCommunityReviewsItems = styled.ul`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const CommunityReviewItem = styled.li`
display: flex;
flex-direction: column;
gap: 1rem;

`

export const CommunityReviewItemTitle = styled.p`
font-size: ${({ theme }) => theme.fontSizes.base};
font-weight: ${({ theme }) => theme.fontWeights.extrabold};
color: ${({ theme }) => theme.colors.foreground};
`

export const CommunityReviewItemText = styled.p`
font-size: ${({ theme }) => theme.fontSizes.sm};
color: ${({ theme }) => theme.colors.foreground};
`
