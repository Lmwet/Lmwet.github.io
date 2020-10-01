import React from "react";
import Projectrow from "../projectrow";

export default function RowE() {
    const content = {
        sectionTitle: "",
        titleLeft: "Berlin Beirut Solidarity",
        imageLeft: "images/printdesign/bbs.png",
        altLeft: "logo-berlin-beirut-solidarritaet",
        urlLeft:
            "https://www.etsy.com/shop/BerlinBeirutSoli?ref=simple-shop-header-name&listing_id=859481935",
        textLeft:
            "Logo for a campaign in reaction to the explosion in Beirut harbor on 5.08,2020. Vector image.",
        titleRight: "Reproduktive Gerechtigkeit",
        imageRight: "images/printdesign/logo_repro.png",
        altRight: "logo reproduktive Gerechtigkeit",
        textRight:
            "A logo made for a network for reproductive rights in Germany. Vector image.",
        urlRight: "https://repro-gerechtigkeit.de/",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
