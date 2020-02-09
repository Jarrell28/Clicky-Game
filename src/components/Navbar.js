import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const MainNavbar = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="danger" dark expand="md" style={{ justifyContent: "space-between" }}>
            <NavbarBrand href="/">Family Guy Memory Game</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            {props.message ? <NavbarText className="text-white mr-3" style={{ fontSize: "18px" }}>{props.message}</NavbarText> : ""}

            <Collapse isOpen={isOpen} navbar style={{ display: "inline-flex!important", flexGrow: "unset" }}>
                <Nav navbar>
                    <NavItem>
                        <NavbarText className="text-white mr-3" style={{ fontSize: "18px" }}>Score: {props.score}</NavbarText>
                    </NavItem>
                    <NavItem>
                        <NavbarText className="text-white" style={{ fontSize: "18px" }}>High Score: {props.topScore}</NavbarText>
                    </NavItem>
                </Nav>

            </Collapse>
        </Navbar>
    )
}

export default MainNavbar;
