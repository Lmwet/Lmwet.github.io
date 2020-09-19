import React from "react";

export default function Projectrow({ content }) {
    return (
        <div id={content.titleLeft} className="container">
            <div className="row">
                <h2>{content.sectionTitle}</h2>
                <div className="col-md-6 portfolio-item">
                    <a href={content.urlLeft}>
                        <img
                            className="img-responsive"
                            src={content.imageLeft}
                            alt={content.altLeft}
                        />
                    </a>
                    <h3>
                        <a href={content.urlLeft}>{content.titleLeft}</a>
                    </h3>
                    <p>{content.textLeft}</p>
                </div>

                <div className="col-md-6 portfolio-item">
                    <a href="https://m-e-w-s.herokuapp.com/">
                        <img
                            className="img-responsive"
                            src={content.imageRight}
                            alt={content.altRight}
                        />
                    </a>
                    <h3>
                        <a href={content.urlRight}>{content.titleRight}</a>
                    </h3>
                    <p>{content.textRight}</p>
                </div>
            </div>
        </div>
    );
}
