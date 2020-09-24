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
        <React.Fragment className="skills">
            {/* Seagull */}
            <Parallax className="lmwet" x={[-50, 70]} tagOuter="figure">
                <Projectrow content={content}></Projectrow>
            </Parallax>
            {/* Languages */}
            <Parallax className="cv-title" x={[12, 12]} tagOuter="figure">
                <h3 className="cv-title" x={40}>
                    Languages
                </h3>
            </Parallax>
            <Parallax className="word" x={[-10, 100]} tagOuter="figure">
                <p>German</p>
            </Parallax>

            <Parallax className="word" x={[20, 90]} tagOuter="figure">
                <p>French</p>
            </Parallax>

            <Parallax className="word" x={[-20, 60]} tagOuter="figure">
                <p>Spanish</p>
            </Parallax>

            <Parallax className="word" x={[-10, 50]} tagOuter="figure">
                <p>عَرَبِيّ‎</p>
            </Parallax>

            {/* Dev */}
            <Parallax className="cv-title" x={[12, 12]} tagOuter="figure">
                <h3 className="cv-title" x={40}>
                    Full Stack Web Developpement
                </h3>
                <Link to="/services"> A coding Seagull</Link>
            </Parallax>
            <Parallax x={[-20, 40]} tagOuter="figure">
                <p className="word">React</p>
            </Parallax>

            <Parallax className="word" x={[20, 70]} tagOuter="figure">
                <p>View</p>
            </Parallax>

            <Parallax x={[10, 70]} tagOuter="figure">
                <p className="word">Node</p>
            </Parallax>

            <Parallax className="word" x={[-5, 70]} tagOuter="figure">
                <p>ProcessWire CMS</p>
            </Parallax>
            <Parallax x={[-5, 70]} tagOuter="figure">
                <p className="word">Postres SQL</p>
            </Parallax>

            <Parallax className="word" x={[-10, 50]} tagOuter="figure">
                <p>VANILLA JS</p>
                <p>JQuery</p>
            </Parallax>
        </React.Fragment>
    );
}
