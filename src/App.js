import React from "react";
import Friends from "./components/friends";
import List from "./components/list";
import Lmwet from "./components/lmwet";

function App() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <List></List>
                <div id="colorlib-main">
                    <Lmwet></Lmwet>
                    <Friends></Friends>
                </div>
            </div>
        </div>
    );
}

export default App;
