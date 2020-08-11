import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube, { baseParams } from "../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    SearchSubmit("Jeff Sutherland Scrum Google");
  }, []);

  const SearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: { ...baseParams, q: term },
    });
    //console.log(`Response has ${response.data.items.length} items whitin it`);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    // this.setState(
    //   {
    //     videos: response.data.items,
    //     selectedVideo: response.data.items[0]
    //   });

    // // console.log(this.state);
  };

  const onVideoSelect = (video) => {
    // console.log('From the App ', video);
    // this.setState({selectedVideo: video})
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={SearchSubmit} />
      <div className="ui segment">
        {!videos.length ? " " : `${videos.length} videos found`}
      </div>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
