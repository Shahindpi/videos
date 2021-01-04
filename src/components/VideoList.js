import React from 'react';
import VideoItem from '../components/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const RenderedList = videos.map((video) => {
        return (
            <div key={video.id.videoId}>
                <VideoItem
                    onVideoSelect={onVideoSelect}
                    video={video} 
                />
            </div>
        );
    });

    return(
        <div className="ui relaxed devided list">{RenderedList}</div>
    );
};

export default VideoList;