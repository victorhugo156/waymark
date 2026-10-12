import { Link } from 'react-router-dom'
import { ListIcon, XIcon } from '@phosphor-icons/react'
import { HamburgerMenuButton, NavMenu, NavItem } from './styles'
import { useState, useEffect } from 'react'

export function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <>
            <HamburgerMenuButton onClick={toggleMenu}>
                {isOpen ? <XIcon size={24} /> : <ListIcon size={24} />}  
            </HamburgerMenuButton>

                <NavMenu $isOpen={isOpen}>
                    <NavItem>
                        <Link to="/explore" onClick={toggleMenu}>Explore</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/map" onClick={toggleMenu}>Map</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/journey">Journeys</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/community">Community</Link>
                    </NavItem>
                </NavMenu>
            
        </>

    )
}