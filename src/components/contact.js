import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="container">
                    <p>Mariannenplatz 5, 10997 Berlin</p>
                    <a href="mailto:lea.colson@gmail.com">
                        {" "}
                        <span
                            class="glyphicon glyphicon-envelope"
                            aria-hidden="true"
                        ></span>{" "}
                        Write me
                    </a>
                    <p>
                        <span
                            class="
                    glyphicon glyphicon-copyright-mark"
                        ></span>{" "}
                        Lea Colson 2020
                    </p>
                </div>
            </div>
        );
    }
}
