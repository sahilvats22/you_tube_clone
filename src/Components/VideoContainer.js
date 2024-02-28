import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { RedVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const data = await response.json();
      console.log(data);
      setVideos(data.items || []); // Ensure data.items is an array
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <RedVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
