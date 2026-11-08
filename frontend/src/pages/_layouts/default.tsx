import { Outlet, Link, useNavigate } from 'react-router-dom'
import {
  Container,
  Header,
  NavDesktop,
  NavMobile,
  Footer,
  FooterLinksContainer,
  FooterLinks,
  FooterContainer,
  FooterLogo,
  ContainerProfileMenu,
  ProfileMenu,
  UserProfile,
  ProfileMenuLogout,
} from './styles'
import logo from '@/assets/logo.webp'
import logo_white from '@/assets/logo_white.webp'
import { HamburgerMenu } from '@/components/hamburger_menu/hamburger_menu'
import { Logo, AddPlaceButton } from './styles'
import { Button } from '@/components/ui/button'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { getInitials } from '@/utils/getInitials'
import { SignOutIcon } from '@phosphor-icons/react'

export function DefaultLayout() {
  const { user, isAuthenticated, isAuthLoading, ContextLogout } = useContext(AuthContext)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await ContextLogout()
      setIsProfileMenuOpen(false)
      navigate('/sign-in', { replace: true })
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
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

          {!isAuthLoading && isAuthenticated && user && (
            <ContainerProfileMenu>
              <UserProfile
                type="button"
                aria-label="Open account menu"
                aria-expanded={isProfileMenuOpen}
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                {getInitials(user.username)}
              </UserProfile>

              {isProfileMenuOpen && (
                <ProfileMenu>
                  <ProfileMenuLogout type="button" onClick={handleLogout}>
                    <SignOutIcon size={20} weight="regular" aria-hidden="true" />
                    <span>Log out</span>
                  </ProfileMenuLogout>
                </ProfileMenu>
              )}
            </ContainerProfileMenu>
          )}
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