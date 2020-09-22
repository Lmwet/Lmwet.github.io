import React from "react";
import Projectrow from "./projectrow";

export default function Row1() {
    const content = {
        sectionTitle: "",
        titleLeft: "Find me on Github",
        imageLeft: "/images/lmwet.png",
        altLeft: "lmwet",
        textLeft:
            "A coding seagal. A full stack web-developper. German, English, French (mother tongue), Spanish, Arabic. React - Node - SQL - PHP - ProcessWire. An eye for design. A drawing hand.",
        urlLeft: "https://github.com/lmwet/",
        titleRight: "",
        imageRight: "",
        altRight: "",
        textRight: "",
        urlRight: "",
    };

    return <Projectrow content={content}></Projectrow>;
}
