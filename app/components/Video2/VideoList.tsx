// components/VideoList.tsx
'use client'
import React from 'react';
import VideoCard from './VideoCard2';

interface Video {
  videoId: string;
  title: string;
  description: string;
}

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 bg-black gap-8">
      {/* <div className='flex items-center justify-center'> */}
      {videos.map((video, index) => (
        <VideoCard key={index} videoId={video.videoId} title={video.title} description={video.description} />
      ))}
      {/* </div> */}
     
    </div>
  );
};

export default VideoList;
