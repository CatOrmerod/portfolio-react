import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Coding Cat Portfolio</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink 
                href="/About/" 
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
                >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Portfolio/"
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
                >Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Resume/"
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
                >Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact/"
                className={classnames({ active: activeTab === '4' })}
                onClick={() => { toggle('4'); }}
                >Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Navigation;