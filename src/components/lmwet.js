import React from "react";
import Projectrow from "./projectrow";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

export default function Lmwet() {
    const content = {
        sectionTitle: "",
        titleLeft: "",
        imageLeft: "/images/lmwet.png",
        altLeft: "lmwet",
        textLeft: "",
        urlLeft: "https://github.com/lmwet/",
        titleRight: "",
        imageRight: "",
        altRight: "",
        textRight: "",
        urlRight: "",
    };

    return (
        <React.Fragment>
            {/* Seagull */}
            <Parallax className="lmwet" x={[-50, 70]} tagOuter="figure">
                <Projectrow content={content}></Projectrow>
            </Parallax>

            {/* Dev */}
            <Parallax className="cv-title" x={[12, 12]} tagOuter="figure">
                <h3 className="cv-title" x={40}>
                    Full Stack Web Developpement
                </h3>
                <Link to="/services"> See all services</Link>
                <div className="skills">
                    <ul className="dev">
                        <Link to="/projects">
                            {" "}
                            <li className="word">
                                React <span>Hooks Router Redux</span>
                            </li>
                        </Link>
                        <li className="word">Node JS </li>
                        <Link to="/projects">
                            <li className="word2">View JS</li>
                        </Link>
                        <Link to="/projects">
                            <li className="word2">ProcessWire CMS</li>
                        </Link>
                        <li className="word">Postres SQL</li>
                        <li className="word2">VANILLA JS</li>
                        <Link to="/projects">
                            <li className="word">Handlebars</li>
                        </Link>
                        <li className="word2">JQuery</li>
                    </ul>
                    <div className="white-space"></div>
                </div>
            </Parallax>

            {/* Languages */}
            <Parallax className="cv-title" x={[12, 12]} tagOuter="figure">
                <div className="languages">
                    <div className="white-space"></div>
                    <h3 className="cv-title" x={40}>
                        Languages
                    </h3>
                    <ul className="languages">
                        <li>German (fluent)</li>
                        <li>English (fluent)</li>
                        <li>French (mother tongue)</li>
                        <li>Spanish (fluent)</li>
                        <li>
                            عَرَبِيّ‎ (Arabic, basics of lavantin dialect,
                            reading, writing)
                        </li>
                    </ul>
                </div>
            </Parallax>

            {/* Skills */}
            <Parallax className="cv-title" x={[12, 12]} tagOuter="figure">
                <div className="languages">
                    <div className="white-space"></div>
                    <h3 className="cv-title" x={40}>
                        Other important Lmwet skills...
                    </h3>
                    <ul className="soft">
                        <li>Project management // Team work</li>
                        <img
                            className="img-circle"
                            src="/images/manitas.png"
                            alt=""
                            width={300}
                            height={200}
                        />
                        <li>Translation & Language pedagogy</li>
                        <img
                            className="img-circle"
                            src="/images/trad.png"
                            alt=""
                            width={200}
                            height={200}
                        />

                        <li>Accordion</li>
                        <img
                            className="img-circle"
                            src="/images/bb.png"
                            alt=""
                            width={200}
                            height={200}
                        />
                    </ul>
                    <div className="white-space"></div>
                    <div className="white-space"></div>
                </div>
            </Parallax>
        </React.Fragment>
    );
}
