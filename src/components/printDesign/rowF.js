import React from "react";
import Projectrow from "../projectrow";

export default function RowF() {
    const content = {
        sectionTitle: "Other formats",
        titleLeft: "Banner for the Kurdish Feminist Movement",
        imageLeft: "images/printdesign/bannerLeila.png",
        altLeft: "Banner-Leila-Gueven",
        urlLeft: "",
        textLeft:
            "Banner for the 8th of March 2019. Printed in 9/1.5 meters and used in various cities in Europe.",
        // titleRight: "Label for the chili brand Tipare",
        // imageRight: "images/printdesign/tipare.png",
        // altRight: "label-tipare-chili",
        // textRight: "",
        // urlRight: "",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
