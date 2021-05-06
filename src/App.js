import React, { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./GlobalStyleCom";
const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Navbar />
        </Fragment>
    );
};

export default App;
