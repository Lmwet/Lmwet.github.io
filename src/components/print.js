import React from "react";
import RowA from "./printDesign/rowA";
import RowB from "./printDesign/rowB";
import RowC from "./printDesign/rowC";
// import RowD from "./printDesign/rowD";

export default function Print() {
    return (
        <React.Fragment>
            <div className="print">
                <RowA></RowA>
                <RowB></RowB>
                <RowC></RowC>
            </div>
        </React.Fragment>
    );
}
{
    /* 
        
        <RowD></RowD> */
}
