import React, { useState } from "react";
import styled from "styled-components";
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    return (
        <Nav>
            <LeftSide>
                <h2>Logo</h2>
            </LeftSide>
            <RightSide>
                <Links>
                    <div id={showLinks ? "hidden" : ""}>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com">Home</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com">About</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com">ContactUs</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com">Details</a>
                            </li>
                        </ul>
                    </div>
                </Links>
            </RightSide>
        </Nav>
    );
};
export default Navbar;
const Nav = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    background-color: coral;
    color: white;
    font-size: 20px;
    font-weight: 500;
    width: 100vw;
    height: 80px;
`;
const LeftSide = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 70px;
    @media only screen and (max-width: 701px) {
        font-size: 17px;
    }
`;
const RightSide = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const Links = styled.div`
    max-height: 80px;
    ul {
        margin-right: 70px;
        li {
            list-style: none;
            display: inline-block;
            a {
                text-decoration: none;
                color: white;
            }
        }
        li a {
            margin-right: 20px;
            margin-left: 20px;
        }
    }
    @media only screen and (max-width: 701px) {
        font-size: 17px;
    }
    #hidden {
        position: absolute;
        right: 0;
        top: 80px;
        height: auto;
        width: 100vw;
        background-color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }

    @media only screen and (max-width: 550px) {
        display: none;
    }
`;
