import React from "react";
import Projectrow from "../projectrow";

export default function RowD() {
    const content = {
        sectionTitle: "Logos",
        titleLeft: "Dar Sudan,  دار سودان",
        imageLeft: "images/printdesign/darsudan_logo.png",
        altLeft: "logo-darsudan",
        urlLeft: "images/printdesign/darsudan_logo.png",
        textLeft:
            "Logo for a collective of Sudanese Feminists based in Berlin. Vector image.",
        titleRight: "Solo Pajaros",
        imageRight: "images/printdesign/solopajaros.png",
        altRight: "logo-solo-pajaros",
        textRight: "For a modern cumbia band in Berlin. Hand-painted.",
        urlRight: "https://www.facebook.com/somos.solo.pajaros/",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
