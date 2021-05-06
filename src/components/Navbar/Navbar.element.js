import styled from "styled-components";
export const Navobar = styled.nav`
    background-color: #114cee;
    padding: 1rem 2rem;
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
export const Logo = styled.a`
    font-size: 2rem;
    font-weight: 700;
    span {
        font-size: 0.8rem;
        font-weight: 800;
        display: inline-block;
        margin-top: -5px;
        padding: 5px;
        position: absolute;
    }
`;
export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
        display: flex;
    }
    span {
        height: 3px;
        width: 25px;
        background-color: red;
        margin-bottom: 5px;
        border-radius: 5px;
    }
`;
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 800px) {
        a:nth-child(1) {
            margin-top: 20px;
        }
        display: flex;
        overflow: hidden;
        flex-direction: column;
        width: 100vw;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
        transition: max-height 0.3s ease-in;
    }
`;
export const MenuLink = styled.a`
    padding: 0 1rem;
    @media only screen and (max-width: 800px) {
        padding: 0.4rem 0;
    }
`;
