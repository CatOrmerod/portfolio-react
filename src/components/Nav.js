import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props, {currentPage, handlePageChange}) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Coding Cat Portfolio</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink 
                href="/About/" onClick={() => handlePageChange('Home')} active={currentPage === 'Home'}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Portfolio/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Resume/">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Navigation;