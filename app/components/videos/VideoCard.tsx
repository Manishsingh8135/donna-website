// components/VideoCard.tsx
'use client'
import React from 'react';
import YouTube from 'react-youtube';

interface VideoCardProps {
  videoLink: string;
  title: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoLink, title, description }) => {
  // Extract video ID from the video link
  const videoId = videoLink.split('v=')[1].split('&')[0];

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg mb-8">
      <div className="relative overflow-hidden pb-2/3">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
