import { Outlet, Link } from 'react-router-dom'
import {
  Container,
  Header,
  NavDesktop,
  NavMobile,
  UserProfile,
  Footer,
  FooterLinksContainer,
  FooterLinks,
  FooterContainer,
  FooterLogo,
} from './styles'
import logo from '@/assets/logo.webp'
import logo_white from '@/assets/logo_white.webp'
import { HamburgerMenu } from '@/components/hamburger_menu/hamburger_menu'
import { Logo, AddPlaceButton } from './styles'
import { Button } from '@/components/ui/button'

export function DefaultLayout() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>

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
      <Footer>
        <FooterContainer>
          <FooterLogo src={logo_white} alt="Logo" />
          <p>Discover Sydney with access information you can trust. Community-verified, never clinical.</p>
        </FooterContainer>

        <FooterLinksContainer>
          <FooterLinks>
            <p>EXPLORE</p>
            <li><Link to="/privacy">Places</Link></li>
            <li><Link to="/terms">Map</Link></li>
            <li><Link to="/contact">Journeys</Link></li>
          </FooterLinks>
          <FooterLinks>
            <p>COMMUNITY</p>
            <li><Link to="/privacy">Add a place</Link></li>
            <li><Link to="/terms">Report access</Link></li>
            <li><Link to="/contact">Guidelines</Link></li>
          </FooterLinks>
          <FooterLinks>
            <p>ACCOUNT</p>
            <li><Link to="/privacy">Preferences</Link></li>
            <li><Link to="/terms">Log in</Link></li>
            <li><Link to="/contact">Sign up</Link></li>
          </FooterLinks>
        </FooterLinksContainer>
      </Footer>
    </Container>
  )
}