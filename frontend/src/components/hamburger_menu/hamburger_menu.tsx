import { Link } from 'react-router-dom'
import { ListIcon, XIcon } from '@phosphor-icons/react'
import { HamburgerMenuButton, NavMenu, NavItem } from './styles'
import { useState, useEffect, useRef  } from 'react'

export function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    function toggleMenu() {
        console.log('toggleMenu');
        setIsOpen(!isOpen);
    }


    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return

        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsOpen(false)
                menuButtonRef.current?.focus()
            }
        }
        
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return
      
        function handleOutsideClick(event: PointerEvent) {
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
          ) {
            setIsOpen(false)
          }
        }
      
        document.addEventListener('pointerdown', handleOutsideClick)
      
        return () => {
          document.removeEventListener('pointerdown', handleOutsideClick)
        }
      }, [isOpen])

    return (
        <div ref={menuRef}>
            <HamburgerMenuButton ref={menuButtonRef} type="button" onClick={toggleMenu} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
                {isOpen ? <XIcon size={24} aria-hidden="true" /> : <ListIcon size={24} aria-hidden="true" />}
            </HamburgerMenuButton>

            {isOpen && (
                <NavMenu id="mobile-navigation" $isOpen={isOpen}>
                    <NavItem>
                        <Link to="/explore" onClick={toggleMenu}>Explore</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/map" onClick={toggleMenu}>Map</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/journey" onClick={toggleMenu}>Journeys</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/community" onClick={toggleMenu}>Community</Link>
                    </NavItem>
                </NavMenu>
            )}
        </div>

    )
}