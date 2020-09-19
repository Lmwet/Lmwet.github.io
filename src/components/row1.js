import React from "react";
import Projectrow from "./projectrow";

export default function Row1() {
    const content = {
        sectionTitle: "",
        titleLeft: "Find me on Github",
        imageLeft: "/images/lmwet.png",
        altLeft: "lmwet",
        textLeft:
            "Presentation ?? Profile stuff ... Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so",
        urlLeft: "https://github.com/lmwet/",
        titleRight: "",
        imageRight: "",
        altRight: "",
        textRight: "",
        urlRight: "https://littlesimz.co/",
    };

    return <Projectrow content={content}></Projectrow>;
}
