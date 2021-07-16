import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';
import './nav.css';
import {
  Link,
  useRouteMatch,
  useLocation
} from "react-router-dom";

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);
  let location = useLocation();

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/">Coding Cat Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto">
                <NavLink
                  className={location.pathname === '/about' ? 'active' : ''}
                ><Link to ='/about'>About</Link>
                </NavLink>
                <NavLink
                  className={location.pathname === '/portfolio' ? 'active' : ''}
                ><Link to ='/portfolio'>Portfolio</Link>
                </NavLink>
                <NavLink
                  className={location.pathname === '/resume' ? 'active' : ''}
                ><Link to ='/resume'>Resume</Link>
                </NavLink>
                <NavLink
                  className={location.pathname === '/contact' ? 'active' : ''}
                ><Link to ='/contact'>Contact</Link>
                </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }

export default Navigation;