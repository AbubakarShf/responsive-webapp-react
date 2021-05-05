import React from "react";
import styled from "styled-components";
const Navbar = () => {
    return (
        <Container>
            <NavoBar>
                <WebLogo>
                    <h3>Logo</h3>
                </WebLogo>
                <WebLinks>
                    <ul>
                        <li>
                            <a href="http://facebook.com" target="_blank">
                                Link1
                            </a>
                        </li>
                        <li>
                            <a href="http://facebook.com" target="_blank">
                                Link2
                            </a>
                        </li>
                        <li>
                            <a href="http://facebook.com" target="_blank">
                                Link3
                            </a>
                        </li>
                        <li className="last">
                            <a href="http://facebook.com" target="_blank">
                                Link4
                            </a>
                        </li>
                    </ul>
                </WebLinks>
            </NavoBar>
        </Container>
    );
};

export default Navbar;
const Container = styled.div`
    background-color: coral;
    color: white;
    font-size: 24px;
    font-weight: 700;
    width: 100vw;
    height: auto;
`;
const NavoBar = styled.nav`
    display: flex;
    justify-content: flex-end;
`;
const WebLogo = styled.div`
    padding: 22px 22px;
    align-items: center;
    margin-right: auto;
    margin-left: 20px;
`;
const WebLinks = styled.div`
    ul {
        align-items: center;
        padding: 22px 22px;
        align-items: center;
        .last {
            margin-right: 20px;
        }
        li {
            list-style: none;
            display: inline-block;
            a {
                text-decoration: none;
                padding-left: 50px;
                padding-right: 20px;
                color: white;
            }
        }
    }
`;
