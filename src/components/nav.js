import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                            <Link to="/" className="navbar-brand">
                                Lmwet
                            </Link>
                        </div>
                        {/* Navbar links */}
                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link className="nav-link" to="/services">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link className="nav-link" to="/projects">
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link className="nav-link" to="/print">
                                        Print Design
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-link">
                                    <Link className="nav-link" to="/me">
                                        Contact
                                    </Link>
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
