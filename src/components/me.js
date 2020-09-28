import React from "react";
import Lmwet from "./lmwet";

export default function Me() {
    return (
        <React.Fragment>
            <div className="footer-blurb">
                <div className="container">
                    <a href="mailto:lea.colson@gmail.com">
                        <Lmwet></Lmwet>
                    </a>
                    <a href="mailto:lea.colson@gmail.com">
                        <p>Send me an email</p>
                    </a>
                    <a href="tel:0049015163050145">
                        <p>Or give me a call: +49 015163050145</p>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}
