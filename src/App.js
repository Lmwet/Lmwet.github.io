import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Experience from "./components/experience";
import Contact from "./components/contact";
import List from "./components/list";
import Projectrow from "./components/projectrow";

function App() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Nav>{logo}</Nav>
                <List></List>
                <div id="colorlib-main">
                    <Projectrow></Projectrow>
                    <Experience></Experience>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
}

export default App;
