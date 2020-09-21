import React from "react";
import Projectrow from "./projectrow";

export default function Row3() {
    const content = {
        sectionTitle: "View & Handlebars",
        titleLeft: "Sketch Scratch",
        imageLeft: "/images/boom.png",
        altLeft: "Scratch",
        textLeft:
            "Presentation ?? Profile stuff ... Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so",
        urlLeft: "http://scratzch.herokuapp.com/",
        titleRight: "A Petition App for East River Park",
        imageRight: "/images/EastRiverPark.png",
        altRight: "",
        textRight:
            "Presentation ?? Profile stuff ... Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so",
        urlRight: "http://petition-east-river-park-lmwet.herokuapp.com/",
    };

    return <Projectrow content={content}></Projectrow>;
}
