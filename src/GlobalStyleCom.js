import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    padding:0px;
    margin:0px;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
}
a{
    text-decoration: none;
    color:white;

}
body{
    background-color:coral;
}
`;
export default GlobalStyle;
