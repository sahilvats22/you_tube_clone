import React from "react";

const VideoCard = ({ info }) => {
  // Destructure snippet and statistics from info
  const { snippet, statistics } = info;

  return (
    <div className="p-2 m-2 w-72 shadow-lg hover:bg-gray-400 rounded-lg">
      <img className="rounded-lg" alt="video-icon" src={snippet.thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
