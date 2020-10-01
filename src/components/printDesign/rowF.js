import React from "react";
import Projectrow from "../projectrow";

export default function RowF() {
    const content = {
        sectionTitle: "Other formats",
        titleLeft: "Banner for the Kurdish Feminist Movement",
        imageLeft: "images/printdesign/bannerLeila.png",
        altLeft: "Banner-Leila-Gueven",
        urlLeft: "images/printdesign/bannerLeila.png",
        textLeft:
            "Banner for the 8th of March 2019. Printed in 9/1.5 meters and used in various cities in Europe.",
        titleRight: "Illustrations for the Xwebun magazine",
        imageRight: "images/printdesign/rosen.png",
        altRight: "roses",
        textRight:
            "Regular contribution to the young kurdish feminists magazine Xwebun",
        urlRight:
            "https://www.rojaciwan.eu/de/hejmara-14-ya-kovara-xwebun-derket/",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
