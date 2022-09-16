import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
import './LiveStream.css'
import ReactHlsPlayer from 'react-hls-player';


export const LiveStream = () => {

    const info = {
        headline: "Live",
        text: "Tervetuloa katsomaan livesyötettä jurrisporasta. Lähetys alkaa kun alkaa ja loppuu kun on loppuakseen."
    }

    return (

        <div className="LiveStream">
            <div className="LiveStreamContainer">
                <Headline info={info} />
                <ReactHlsPlayer
                    src="https://17fc8e548d71.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.356299520911.channel.kmWXdgRoLRJD.m3u8"
                    autoPlay={true}
                    controls={true}
                    width="100%"
                    height="auto"
                />
                <NavBar />
            </div>
        </div>
    )
};