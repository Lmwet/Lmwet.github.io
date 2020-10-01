import React from "react";
import Projectrow from "../projectrow";

export default function RowG() {
    const content = {
        sectionTitle: "",
        titleLeft: "Stickers for social medias",
        imageLeft: "images/printdesign/meditation.png",
        altLeft: "Meditation-sticker",
        urlLeft: "",
        textLeft: "Item from a private whatsapp sticker set.",
        titleRight: "Label for the chili brand Tipare",
        imageRight: "images/printdesign/tipare.png",
        altRight: "label-tipare-chili",
        textRight: "Background-motive from a traditional cloath Burkina Faso",
        urlRight: "",
    };

    return (
        <React.Fragment>
            <Projectrow content={content}></Projectrow>
        </React.Fragment>
    );
}
