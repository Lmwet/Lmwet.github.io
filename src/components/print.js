import React from "react";
import RowA from "./printDesign/rowA";
import RowB from "./printDesign/rowB";
import RowC from "./printDesign/rowC";
import RowD from "./printDesign/rowD";
import RowE from "./printDesign/rowE";
import RowF from "./printDesign/rowF";
import RowG from "./printDesign/rowG";
import RowH from "./printDesign/rowH";
// import RowI from "./printDesign/rowI";

export default function Print() {
    return (
        <React.Fragment>
            <div id="print" className="print">
                <RowA></RowA>
                <RowB></RowB>
                <RowC></RowC>
                <RowD></RowD>
                <RowE></RowE>
                <RowF></RowF>
                <RowH></RowH>
                <RowG></RowG>
            </div>
        </React.Fragment>
    );
}
