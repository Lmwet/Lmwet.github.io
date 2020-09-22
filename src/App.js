import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Experience from "./components/experience";
import Contact from "./components/contact";
import List from "./components/list";
import Row1 from "./components/row1";
import Row2 from "./components/row2";
import Row3 from "./components/row3";
import Row4 from "./components/row4";
import Row5 from "./components/row5";

function App() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Nav></Nav>
                <List></List>
                <div id="colorlib-main">
                    <Row1></Row1>
                    <Row2></Row2>
                    <Row3></Row3>
                    <Row4></Row4>
                    <Row5></Row5>
                    <Experience></Experience>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
}

export default App;
