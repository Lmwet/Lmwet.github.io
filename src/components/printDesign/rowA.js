import React from "react";
import Projectrow from "../projectrow";

export default function RowA() {
    const content = {
        sectionTitle: "Flyers",
        titleLeft: "Berlin action week against femicide",
        imageLeft: "images/printdesign/flyer_SKB_20_deutsch copy.jpg",
        altLeft: "action-week-flyer-2020",
        textLeft:
            "2020 edition of the Berlin Action Week, gathering feminists groups of different communities. The figure of the peacok is sacred for Ezidi people, as it represents the Tawsi Melek angel.",
        // titleRight: "Mush Rooms",
        imageRight: "images/printdesign/flyer_SKB_back_deutsch copy.jpg",
        altRight: "lmwet",
        // textRight:
        //     "A social network for plotting weirdos in React. Search friends, make friends, plot, unfriend.",
        // urlRight: "https://github.io/lmwet/mushrooms",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
