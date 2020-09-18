import React, { Component } from "react";

export default class Experience extends Component {
    render() {
        return (
            <div className="footer-blurb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="http://lorempixel.com/100/100/people/3"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>My Stuff</h3>
                            <p>
                                Upon yielding, kind sea subdue very seed sixth
                                them lesser one lesser there earth days were
                                multiply so sixth gathering fifth that man fowl
                                made.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary"
                                    href="http://lorempixel.com/100/100/people/3"
                                >
                                    More Stuff
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="http://lorempixel.com/100/100/people/1"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Your Stuff</h3>
                            <p>
                                Upon yielding, kind sea subdue very seed sixth
                                them lesser one lesser there earth days were
                                multiply so sixth gathering fifth that man fowl
                                made.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary"
                                    href="http://lorempixel.com/100/100/people/3"
                                >
                                    More Stuff
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="http://lorempixel.com/100/100/people/2"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Our Stuff</h3>
                            <p>
                                Upon yielding, kind sea subdue very seed sixth
                                them lesser one lesser there earth days were
                                multiply so sixth gathering fifth that man fowl
                                made.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary"
                                    href="http://lorempixel.com/100/100/people/3"
                                >
                                    More Stuff
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* /.row */}
                </div>
            </div>
        );
    }
}
