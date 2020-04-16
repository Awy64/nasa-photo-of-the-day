import React from "react";
import { Nav, NavItem, Navbar, NavbarBrand, NavbarText, NavLink } from 'reactstrap';

const NavBar = (props) => {
    return(
   
<Navbar color="light" light expand="md">
    <NavbarBrand href="https://apod.nasa.gov/apod/">{props.text}</NavbarBrand>
    <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink href="https://apod.nasa.gov/apod/">Offical NASA POTD Site</NavLink>
        </NavItem>
    </Nav>
    <NavbarText>{props.date}</NavbarText>
</Navbar>
    );   
        
}


export default NavBar