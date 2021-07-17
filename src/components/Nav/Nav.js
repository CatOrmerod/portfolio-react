import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import './nav.css';
import {
  Link,
  useRouteMatch,
  useLocation
} from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let location = useLocation();

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Portfolio - Cat Ormerod</NavbarBrand>
        <NavbarToggler onClick={toggle} light />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={location.pathname === '/about' ? 'active' : ''}
              ><Link to='/about'>About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location.pathname === '/portfolio' ? 'active' : ''}
              ><Link to='/portfolio'>Portfolio</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location.pathname === '/resume' ? 'active' : ''}
              ><Link to='/resume'>Resume</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location.pathname === '/contact' ? 'active' : ''}
              ><Link to='/contact'>Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default Navigation;