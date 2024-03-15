// components/VideoCard.tsx
'use client'
import React from 'react';
import YouTube from 'react-youtube';

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
}

const VideoCard2: React.FC<VideoCardProps> = ({ videoId, title, description }) => {
  const opts = {
    height: '300',
    width: '500',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="md:w-[600px] md:h-[500px] rounded overflow-hidden shadow-lg">
      <div className="flex justify-center items-center pb-3/5">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Watch Now
        </button>
      </div> */}
    </div>
  );
};

export default VideoCard2;
