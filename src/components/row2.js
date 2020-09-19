import React from "react";
import Projectrow from "./projectrow";

export default function Row2() {
    const content = {
        sectionTitle: "React Projects",
        titleLeft: "Mews",
        imageLeft: "/images/mewsPF.png",
        altLeft: "Mews",
        textLeft:
            "Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so",
        urlLeft: "https://m-e-w-s.herokuapp.com/",
        titleRight: "Mush Rooms",
        imageRight: "/images/MushRoomPF.png",
        altRight: "MushRoom",
        textRight: "Upon yielding, kind sea subdue very seed sixth th",
        urlRight: "https://littlesimz.co/",
    };

    return <Projectrow content={content}></Projectrow>;
}
