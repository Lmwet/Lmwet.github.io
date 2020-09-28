import React from "react";
import Projectrow from "../projectrow";

export default function RowA() {
    const content = {
        sectionTitle: "React",
        titleLeft: "Mews",
        imageLeft: "/images/mewsPF.png",
        altLeft: "Mews",
        textLeft:
            "A music web app in React, Express Node JS, Postrgres SQL - Spotify API, and a lot of musical research. Presenting artists for the user to create their playlists and add new tracks to a radio-mix.",
        urlLeft: "https://m-e-w-s.herokuapp.com/",
        // titleRight: "Mush Rooms",
        // imageRight: "/images/MushRoomPF.png",
        // altRight: "MushRoom",
        // textRight:
        //     "A social network for plotting weirdos in React. Search friends, make friends, plot, unfriend.",
        // urlRight: "https://github.io/lmwet/mushrooms",
    };

    return <Projectrow content={content}></Projectrow>;
}
