import React from "react";
import Projectrow from "./projectrow";

export default function Row4() {
    const content = {
        sectionTitle: "PHP Projects",
        titleLeft: "Fairyfiles",
        imageLeft: "/images/ff.png",
        altLeft: "Fairyfiles-logo",
        textLeft:
            "Presentation ?? Profile stuff ... Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so",
        urlLeft: "https://fairyfiles.org/",
        titleRight: "Reproduktive Gerechtigkeit",
        imageRight: "/images/repro.png",
        altRight: "Reproduktive-Gerechtigkeit",
        textRight:
            "Presentation ?? Profile stuff ... Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so",
        urlRight: "https://repro-gerechtigkeit.de/",
    };

    return <Projectrow content={content}></Projectrow>;
}
