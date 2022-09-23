import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
import './LiveStream.css'
import ReactHlsPlayer from 'react-hls-player';
import GoogleAd from '../Ads';
import {Helmet} from "react-helmet";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/live" });

export const LiveStream = () => {
    const info = {
        headline: "Live",
        text: "Tervetuloa katsomaan livesyötettä jurrisporasta. Lähetys alkaa kun alkaa ja loppuu kun on loppuakseen."
    }

    return (

        <div className="LiveStream">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Livestream</title>
                <link rel="canonical" href="https://jurrispora.fi/live" />
            </Helmet>
            <div className="LiveStreamContainer">
                <Headline info={info} />
                <ReactHlsPlayer
                    src="https://17fc8e548d71.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.356299520911.channel.kmWXdgRoLRJD.m3u8"
                    autoPlay={true}
                    controls={true}
                    width="100%"
                    height="auto"
                />
                <GoogleAd slot="9549432519" googleAdId="ca-pub-2083520398409749"/>
                <NavBar />
            </div>
        </div>
    )
};