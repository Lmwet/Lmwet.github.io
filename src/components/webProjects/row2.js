import React from "react";
import Projectrow from "../projectrow";

export default function Row2() {
    const content = {
        sectionTitle: "React",
        titleLeft: "Mews",
        imageLeft: "/images/mewsPF.png",
        altLeft: "Mews",
        textLeft:
            "A music web app in React, with an Express Node JS server, using the Spotify API, and long hours of musical research. Presenting artists and lists of tracks for the user to publish and play their personalized playlists and add new tracks to a radio-mix.",
        urlLeft: "https://m-e-w-s.herokuapp.com/",
        titleRight: "MushRoom",
        imageRight: "/images/MushRoomPF.png",
        altRight: "MushRoom",
        textRight:
            "A fantasy social network to plot in real time and represent your cause, written in React, using web sockets and a native node JS server. Search for allies, make friends, write on their walls, update infos, plot, reset your password and of course, delete your account after use.",
        urlRight: "https://mushrooom.herokuapp.com/",
    };

    return <Projectrow content={content}></Projectrow>;
}
