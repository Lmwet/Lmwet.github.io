import React from "react";
import Projectrow from "../projectrow";

export default function RowB() {
    const content = {
        sectionTitle: "",
        titleLeft: "Berlin action week against femicide",
        imageLeft: "/images/printdesign/bf2019Front.png",
        altLeft: "action-week-flyer-2019-front",
        textLeft: "2019 edition.",
        // titleRight: "Mush Rooms",
        imageRight: "/images/printdesign/bf2019Back.png",
        altRight: "lmwet",
        // textRight:
        //     "A social network for plotting weirdos in React. Search friends, make friends, plot, unfriend.",
        // urlRight: "https://github.io/lmwet/mushrooms",
    };

    return <Projectrow content={content}></Projectrow>;
}
