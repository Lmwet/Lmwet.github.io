import React from "react";
import Projectrow from "../projectrow";

export default function RowA() {
    const content = {
        sectionTitle: "Flyers",
        titleLeft: "Berlin action week against femicide, 2020",
        imageLeft: "images/printdesign/bf20.png",
        altLeft: "action-week-flyer-2020",
        textLeft:
            "2020 edition of the Berlin Action Week, gathering feminists groups of different communities. The figure of the peacok is sacred for Ezidi people, as it represents the Tawsi Melek angel.",
        titleRight: "Berlin action week against femicide, 2019",
        imageRight: "images/printdesign/bf19.png",
        altRight: "action-week-flyer-2019",
        textRight: "",
        urlRight: "",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
