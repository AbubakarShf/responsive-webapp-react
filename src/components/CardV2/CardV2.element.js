import styled from "styled-components";
export const Container = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    div {
        height: 300px;
        width: 300px;
        margin: 30px;
        align-items: center;
    }
    @media only screen and (max-width: 800px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
export const Box1 = styled.div`
    background-color: #00aeff;
    flex-grow: 1;
`;
export const Box2 = styled.div`
    background-color: #92f70f;
    flex-grow: 1;
`;
