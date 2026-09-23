import styled from "styled-components";

export const Container = styled.div`
width: 100%;
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
gap: 2rem;
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

@media (min-width: 1024px) {
  background-color: red;

}

`

export const AddPlaceButton = styled.div`
display: none;

@media (min-width: 1024px) {
  display: block;

}

`
