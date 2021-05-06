import React, { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";
import CardV1 from "./components/CardV1/CardV1";
import CardV2 from "./components/CardV2/CardV2";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./GlobalStyleCom";
const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Navbar />
            <CardV1 />
            <CardV2 />
            <Footer />
        </Fragment>
    );
};

export default App;
