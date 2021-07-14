import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Coding Cat Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {pages.map(page => (
              <NavItem>
                <NavLink
                  className={`${page.name === currentPage.name}`}
                  key={page.name}
                  onClick={() => setCurrentPage(page)}
                >{page.name}</NavLink>
              </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }

export default Navigation;