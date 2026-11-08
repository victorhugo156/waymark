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

export const ContainerLogout = styled.div`
display: flex;

border-top: 1px solid ${({ theme }) => theme.colors.border};


@media (min-width: 1024px) {
  display: block;
}

`

export const ContainerProfileMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
export const UserProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  padding: 0;

  background-color: #111;
  color: #fbc400;
  border: none;
  border-radius: 50%;

  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;

  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: #333;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;

  display: flex;
  flex-direction: column;

  min-width: 200px;
  padding: 1rem;

  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 0.75rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  z-index: 100;
`;

export const ProfileMenuLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem 0.5rem 0.25rem;

  background: transparent;
  border: none;
  border-top: 1px solid #d4d4d4;
  border-radius: 0;

  color: #111;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;

  cursor: pointer;

  &:hover {
    color: #666;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 2px;
  }
`;

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