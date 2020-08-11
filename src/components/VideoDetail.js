import React from "react";
import {htmlDecode} from '../apis/youtube';

const VideoDetail = (props) => {
  if (!props.video) {
    return <div></div>;
  }

  const videoLink = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoLink} title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{htmlDecode(props.video.snippet.title)}</h4>
        <p>{htmlDecode(props.video.snippet.description)}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
