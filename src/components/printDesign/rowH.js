import React from "react";
import Projectrow from "../projectrow";

export default function RowH() {
    const content = {
        sectionTitle: "",
        titleLeft: "Postcards, stickers, tote bags",
        imageLeft: "images/printdesign/merch_bbs.png",
        altLeft: "Berlin-Beirut-sticker",
        urlLeft:
            "https://www.etsy.com/shop/BerlinBeirutSoli?ref=simple-shop-header-name&listing_id=859481935",
        textLeft:
            "Merch produced for the Berlin Beirut Solidarity campaign, in reaction to the explosion in the Beirut harbor on 05.08.20",
        titleRight: "Poster for Queeres Verlegen, 2019",
        imageRight: "images/printdesign/QV2019.png",
        altRight: "QV-poster-2019",
        textRight:
            "Poster for the Berlin Queer Bookfair, Queeres Verlegen 2019",
        urlRight: "https://fairyfiles.org/en/events-index/coming-up/",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
