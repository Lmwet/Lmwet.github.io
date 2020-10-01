import React from "react";
import Projectrow from "../projectrow";

export default function RowB() {
    const content = {
        sectionTitle: "",
        titleLeft: "Berlin action week against femicide, 2018",
        imageLeft: "/images/printdesign/bf18.png",
        altLeft: "action-week-flyer-2018-front",
        textLeft:
            "First edition of the Action Week against Femicide and Sexualised Violence. Paintings by Amanda Priebe.",
        urlLeft: "/images/printdesign/bf18.png",
        // titleRight:
        //     "Memorial march for the victims of slavery, colonialism and racism, 2020",
        // imageRight: "/images/printdesign/mms.png",
        // altRight: "Memorial-march-flyer",
        // textRight:
        //     "A social network for plotting weirdos in React. Search friends, make friends, plot, unfriend.",
        // urlRight: "https://github.io/lmwet/mushrooms",
    };

    return <Projectrow content={content}></Projectrow>;
}
