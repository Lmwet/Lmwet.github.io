import React from "react";
import Projectrow from "../projectrow";

export default function RowE() {
    const content = {
        sectionTitle: "",
        titleLeft: "Berlin Beirut Solidarity",
        imageLeft: "images/printdesign/bbs.png",
        altLeft: "logo-berlin-beirut-solidarritaet",
        urlLeft: "",
        textLeft:
            "Logo for a campaign in reaction to the explosion in Beirut harbor. Vector image.",
        titleRight: "Reproduktive Gerechtigkeit",
        imageRight: "images/printdesign/logo_repro.png",
        altRight: "logo reproduktive Gerechtigkeit",
        textRight: "Vector image.",
        urlRight: "https://repro-gerechtigkeit.de/",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
