import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';

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
        <NavbarBrand href="/">Coding Cat Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto">
            {pages.map(page => (
                <NavLink
                  className={`${page.name === currentPage.name}`}
                  key={page.name}
                  onClick={() => setCurrentPage(page)}
                >{page.name}</NavLink>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }

export default Navigation;