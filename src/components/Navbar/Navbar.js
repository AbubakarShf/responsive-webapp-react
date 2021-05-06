import React, { Fragment, useState } from "react";
import { Navobar, Logo, Hamburger, Menu, MenuLink } from "./Navbar.element";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Navobar>
                <Logo href="https://github.com/AbubakarShf" target="_blank">
                    Programmer <span>Half</span>
                </Logo>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <MenuLink href="">Facebook</MenuLink>
                    <MenuLink href="">Whatsapp</MenuLink>
                    <MenuLink href="">LinkedIn</MenuLink>
                    <MenuLink href="">Twitter</MenuLink>
                    <MenuLink href="">Instagram</MenuLink>
                </Menu>
            </Navobar>
        </Fragment>
    );
};

export default Navbar;
