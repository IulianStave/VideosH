import React from "react";
import "./VideoItem.css";
import {htmlDecode} from '../apis/youtube';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{htmlDecode(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
