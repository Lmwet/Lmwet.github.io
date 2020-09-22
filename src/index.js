import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Services from "./components/services";
import Print from "./components/print.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <HashRouter>
        <Nav></Nav>
        <Switch>
            <React.StrictMode>
                <Route exact path="/" component={App} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/print" component={Print} />
            </React.StrictMode>
        </Switch>
    </HashRouter>,

    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
