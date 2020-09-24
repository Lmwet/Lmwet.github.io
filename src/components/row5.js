import React from "react";
import Projectrow from "./projectrow";

export default function Row5() {
    const content = {
        sectionTitle: "HTML CSS JS",
        titleLeft: "The Irksome Institute",
        imageLeft: "/images/ii.png",
        altLeft: "irksome",
        textLeft: "An entirely hand-coded project. Tag by tag, rule by rule.",
        urlLeft: "https://theirksome.de/",
        titleRight: "",
        imageRight: "",
        altRight: "",
        textRight: "",
        urlRight: "",
    };

    return <Projectrow content={content}></Projectrow>;
}
