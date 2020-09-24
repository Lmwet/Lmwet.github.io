import React from "react";
import Projectrow from "./projectrow";

export default function Row4() {
    const content = {
        sectionTitle: "PHP",
        titleLeft: "Fairyfiles",
        imageLeft: "/images/ff.png",
        altLeft: "Fairyfiles-logo",
        textLeft:
            "A website with a CMS in PHP, with a JQuerish API: Processwire. Illustrations and design in collaboration with Luezlez Sol.",
        urlLeft: "https://fairyfiles.org/",
        titleRight: "Reproduktive Gerechtigkeit",
        imageRight: "/images/repro.png",
        altRight: "Reproduktive-Gerechtigkeit",
        textRight: "A wordpress website with its own personal theme.",
        urlRight: "https://repro-gerechtigkeit.de/",
    };

    return <Projectrow content={content}></Projectrow>;
}
