import React from "react";
import Projectrow from "../projectrow";

export default function Row3() {
    const content = {
        sectionTitle: "View & Handlebars",
        titleLeft: "Sketch Scratch",
        imageLeft: "/images/boom.png",
        altLeft: "Scratch",
        textLeft:
            "A single page app in View & AWS to upload your drawings, let your friends upload theirs and comment on them!",
        urlLeft: "http://scratzch.herokuapp.com/",
        titleRight: "A Petition App for East River Park",
        imageRight: "/images/EastRiverPark.png",
        altRight: "",
        textRight:
            "A petition app in handlebars. Create an account, signe, add info to profile, unsigne the petition.",
        urlRight: "http://petition-east-river-park-lmwet.herokuapp.com/",
    };

    return <Projectrow content={content}></Projectrow>;
}
