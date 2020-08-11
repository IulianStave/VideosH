import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedVideos = props.videos.map((videoFound) => {
    return (
      <VideoItem
        onVideoSelect={props.onVideoSelect}
        key={videoFound.id.videoId}
        video={videoFound}
      />
    );
  });
  return <div className="item">{renderedVideos}</div>;
};

export default VideoList;
