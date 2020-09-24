import React, { Component } from "react";

export default class Friends extends Component {
    render() {
        return (
            <div className="footer-blurb">
                <div className="container">
                    <h1 className="page-header">Best friends in arts</h1>
                    <div className="row">
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="/images/lmwet.png"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Juckl</h3>
                            <p>
                                Upon yielding, kind sea subdue very seed sixth
                                them lesser one lesser there earth days were
                                multiply so sixth gathering fifth that man fowl
                                made.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary"
                                    href="/images/webEye.png"
                                >
                                    Contact
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="/images/mewsPF.png"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Luezley Sol</h3>
                            <p>
                                Upon yielding, kind sea subdue very seed sixth
                                them lesser one lesser there earth days were
                                multiply so sixth gathering fifth that man fowl
                                made.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary"
                                    href="/images/webEye.png"
                                >
                                    Contact
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="/images/webEye.png"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Amanda Priebe</h3>
                            <p>
                                Upon yielding, kind sea subdue very seed sixth
                                them lesser one lesser there earth days were
                                multiply so sixth gathering fifth that man fowl
                                made.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary"
                                    href="https://www.amandapriebe.com/"
                                >
                                    More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
