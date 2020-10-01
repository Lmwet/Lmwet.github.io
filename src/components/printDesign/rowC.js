import React from "react";
import Projectrow from "../projectrow";

export default function RowC() {
    const content = {
        sectionTitle: "",
        titleLeft:
            "Memorial march for the victims of slavery, colonialism and racism, 2020",
        imageLeft: "/images/printdesign/mms.png",
        altLeft: "Memorial-march-flyer",
        urlLeft:
            "https://www.theafricancourier.de/europe/african-victims-of-slavery-colonialism-remembered-in-berlin/",
        titleRight: "Queeres Verlegen 2019",
        imageRight: "/images/printdesign/flyerQV19.png",
        altRight: "flyer-queeres-verlegen",
        textRight:
            "Commissionned by the Fairyfiles team for the yearly queer bookfair in november 2019. In cooperation with Luezley Sol. Horizontal half-A3 format.",
        urlRight: "https://fairyfiles.org/archive/",
    };

    return <Projectrow content={content}></Projectrow>;
}
