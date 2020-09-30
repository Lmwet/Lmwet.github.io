import React from "react";
import Projectrow from "../projectrow";

export default function RowC() {
    const content = {
        sectionTitle: "",
        titleLeft:
            "Memorial march for the victims of slavery, colonialism and racism, 2020",
        imageLeft: "/images/printdesign/mms.png",
        altLeft: "Memorial-march-flyer",
        urlLeft: "https://m-e-w-s.herokuapp.com/",
        // titleRight: "Mush Rooms",
        // imageRight: "/images/printdesign/bf18Back.png",
        // altRight: "lmwet",
        // textRight:
        //     "A social network for plotting weirdos in React. Search friends, make friends, plot, unfriend.",
        // urlRight: "https://github.io/lmwet/mushrooms",
    };

    return <Projectrow content={content}></Projectrow>;
}
