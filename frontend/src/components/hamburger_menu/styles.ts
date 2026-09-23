import styled from 'styled-components'

export const HamburgerMenuButton = styled.button`
width: 44px;
height: 44px;
border: none;
cursor: pointer;


@media (min-width: 768px) {
  /* mobile — hide these links; they belong in the hamburger panel */
  display: none;

}


`

export const NavMenu = styled.ul<{ $isOpen: boolean }>`
background-color: ${({ theme }) => theme.colors.background};
position: fixed;
top: 75px;
right: 0;
width: 125px;

flex-direction: column;
justify-content: center;
align-items: center;

transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};

transition: transform 0.3s ease-in-out;
`
export const NavItem = styled.li`
padding-top: 10px;
padding-bottom: 10px;
color: ${({ theme }) => theme.colors.foreground};
text-decoration: none;
font-size: 16px;
font-weight: 500;


`
