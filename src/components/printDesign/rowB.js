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
        titleRight: "Patriarchy is violence, an event by Dar Sudan",
        imageRight: "/images/printdesign/unf.png",
        altRight: "Patriarchal-violence-sudan-flyer",
        textRight:
            "A multi-media event about the resistance against patriarchal violence in Sudan.",
        urlRight: "/images/printdesign/unf.png",
    };

    return <Projectrow content={content}></Projectrow>;
}
