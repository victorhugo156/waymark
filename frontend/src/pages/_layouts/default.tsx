import { Outlet, Link } from 'react-router-dom'
import { Container, Header, NavDesktop, NavMobile, UserProfile } from './styles'
import logo from '../../assets/logo.webp'
import { HamburgerMenu } from '../../components/hamburger_menu/hamburger_menu'
import { Logo, AddPlaceButton } from './styles'
import { Button } from '../../components/ui/button'

export function DefaultLayout() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />

        <NavDesktop>
          <Link to="/explore">Explore</Link>
          <Link to="/map">Map</Link>
          <Link to="/journey">Journeys</Link>
          <Link to="/community">Community</Link>
        </NavDesktop>

        <NavMobile>
          <HamburgerMenu />
          <AddPlaceButton>
          <Button variant="outline">Add a place</Button>
          </AddPlaceButton>
          
          <UserProfile>
            <p>VH</p>
          </UserProfile>
        </NavMobile>
      </Header>
      <Outlet />
    </Container>
  )
}