import React from 'react';
import './Headline.css';

export const Headline = ( { info } ) => {

    return (

        <div className="Headline">
            <div className="HeadlineContainer">
                <div className="HeadlineWrapper">
                    <h1 className="Headline">{info.headline}</h1>
                </div>
                <div className="HeadlineTextWrapper">
                    <div className="HeadlineText">
                        {info.text}
                    </div>
                </div>
            </div>
        </div>
    )
};