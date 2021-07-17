import React, { useState } from 'react';
import {useDocTitle} from '../../utils/customHooks.js'
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
  const [doctitle, setDocTitle] = useDocTitle("CatOrmerod :: About");

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand>Portfolio - Cat Ormerod</NavbarBrand>
        <NavbarToggler onClick={toggle} light />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={() => setDocTitle("CatOrmerod :: About")}
              ><Link to='/about'>About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location.pathname === '/portfolio' ? 'active' : ''}
                onClick={() => setDocTitle("CatOrmerod :: Portfolio")}
              ><Link to='/portfolio'>Portfolio</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location.pathname === '/resume' ? 'active' : ''}
                onClick={() => setDocTitle("CatOrmerod :: Resume")}
              ><Link to='/resume'>Resume</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={() => setDocTitle("CatOrmerod :: Contact")}
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