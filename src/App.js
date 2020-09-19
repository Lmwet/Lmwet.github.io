import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Experience from "./components/experience";
import Contact from "./components/contact";
import List from "./components/list";
import Row1 from "./components/row1";
import Row2 from "./components/row2";
import Row3 from "./components/row3";
import Row4 from "./components/row4";

function App() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Nav>{logo}</Nav>
                <List></List>
                <div id="colorlib-main">
                    <Row1></Row1>
                    <Row2></Row2>
                    <Row3></Row3>
                    <Row4></Row4>
                    <Experience></Experience>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
}

export default App;
