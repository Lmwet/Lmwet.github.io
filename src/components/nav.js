import React, { Component } from "react";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-inverse navbar-fixed-top"
                    role="navigation"
                >
                    <div className="container">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                            >
                                <span className="sr-only">
                                    Toggle navigation
                                </span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a
                                className="navbar-brand"
                                href="https://lmwet.github.io/"
                            >
                                <span className="glyphicon" />
                                Lmwet
                            </a>
                        </div>
                        {/* Navbar links */}
                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="http://lorempixel.com/700/400/nature/1">
                                        Services
                                    </a>
                                </li>
                                <li className="nav navbar-nav">
                                    <a href="http://lorempixel.com/700/400/nature/1">
                                        Print Design
                                    </a>
                                </li>
                                <li className="nav navbar-nav">
                                    <a href="http://lorempixel.com/700/400/nature/1">
                                        Collaborations
                                    </a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="http://lorempixel.com/700/400/nature/1">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container */}
                </nav>
                {/* Content */}
            </div>
        );
    }
}
