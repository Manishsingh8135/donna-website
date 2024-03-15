// pages/index.tsx
'use client'
import React from 'react';
import VideoList from './VideoList';

const videos = [
  {
    videoId: 'AOKiJ4VwcSU',
    title: 'MSG BLESSING CB 051319',
    description: 'Donna McGrath Miracle Healer and Medical Medium- Manifesting Zion Williamson for Knicks in Draft Lottery',
  },
  {
    videoId: 'Vru2SreCu50',
    title: 'Donna McGrath Miracle Healer and Medical Medium',
    description: 'Watch Xpnsion Network on...',
  },

  // Add more videos as needed
];

const VideoHome2: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-7xl font-bold mb-16 text-center">Featured Videos</h1>
      <div className='flex items-center justify-center'>
        <VideoList videos={videos} />
      </div>

    </div>
  );
};

export default VideoHome2;
