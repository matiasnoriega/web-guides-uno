import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./components/atoms/GlobalStyle";

import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Index from "./pages/Index";
import Guide from "./pages/Guide";
import AboutUs from "./pages/AboutUs";
import Contribute from "./pages/Contribute";

ReactDOM.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Header/>
            <Route exact strict path='/' render={() => <Index />} />
            <Route exact strict path='/contribuir' render={() => <Contribute />} />
            <Route exact strict path='/gnuno' render={() => <AboutUs />} />
            <Route exact strict path='/guia/:name' render={() => <Guide />} />
            <Footer/>
        </BrowserRouter>
    </>,
    document.getElementById("root")
);