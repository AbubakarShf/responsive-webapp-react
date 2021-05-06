import styled from "styled-components";
export const Container = styled.div`
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    div {
        height: 300px;
        width: 300px;
        margin: 30px;
        @media only screen and (max-width: 800px) {
            display: flex;
            flex-direction: column;

            /* optional */
            flex: 1 1 auto;
            max-width: 300px;
        }
    }
`;
export const Box1 = styled.div`
    background-color: red;
`;
export const Box2 = styled.div`
    background-color: blueviolet;
`;
export const Box3 = styled.div`
    background-color: yellow;
`;
