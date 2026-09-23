import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 90rem;
margin: 0 auto;

display: flex;
flex-direction: column;

`

export const Header = styled.header`	
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;  
flex-wrap: nowrap;
gap: 1rem;

padding: 1.5rem;
`

export const Logo = styled.img`
width: 9.25rem;
height: 2.25rem;
`

export const NavMobile = styled.nav`
height:.75rem;

display: flex;
gap: .5rem;
align-items: center;
`

export const UserProfile = styled.button`
background-color: ${({ theme }) => theme.colors.foreground};
width: 2.75rem;
height: 2.75rem;

display: flex;
align-items: center;
justify-content: center;

border-radius: 50%;

padding: 0.5rem;

cursor: pointer;

p {
font-size: 1rem;
font-weight: 600;
color: ${({ theme }) => theme.colors.primary};
}

`

export const NavDesktop = styled.nav`
display: none;

@media (min-width: 768px) {
  /* tablet — show Explore, Map, Journeys, Community in a row */
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 1rem;

}


`
export const AddPlaceButton = styled.div`
display: none;

@media (min-width: 1024px) {
  display: block;

}

`

export const Footer = styled.footer`
background-color: ${({ theme }) => theme.colors.foreground};
width: 100%;

display: flex;
flex-direction: column;
gap: 1.5rem;

padding: 1.75rem;


@media (min-width: 1024px) {
  flex-direction: row;
  justify-content: space-between;

}


`

export const FooterLogo = styled(Logo)`
width: 8.25rem;
height: auto;

`

export const FooterContainer = styled.div`
max-width: 22.5rem;
display: flex;
flex: 1;
flex-direction: column;
gap: 1rem;

p {
font-size: ${({ theme }) => theme.fontSizes.sm};
font-weight: ${({ theme }) => theme.fontWeights.regular};
color: ${({ theme }) => theme.colors.background};

white-space: pre-wrap;

line-height: 1.5;
}

@media (min-width: 768px) {
width: 50%;

}

`

export const FooterLinksContainer = styled.nav`
display: flex;
justify-content: flex-start;
gap: 2rem;
`
export const FooterLinks = styled.ul`
display: flex;
flex-direction: column;
gap: .1rem;

p {
font-size: ${({ theme }) => theme.fontSizes.xs};
font-weight: ${({ theme }) => theme.fontWeights.bold};
color: ${({ theme }) => theme.colors.primary};
line-height: 1.5;
letter-spacing: 0.15rem;
}

li {
color: ${({ theme }) => theme.colors.background};
font-size: ${({ theme }) => theme.fontSizes.xs};

list-style: none;

}
`