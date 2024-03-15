// pages/index.tsx
'use client'
import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    link: 'https://www.youtube.com/watch?v=LzWb_P4lYgA&ab_channel=BrianLagerstrom',
    title: 'Video 1 Title',
    description: 'Description of video 1',
  },
  {
    link: 'https://www.youtube.com/watch?v=LzWb_P4lYgA&ab_channel=BrianLagerstrom',
    title: 'Video 2 Title',
    description: 'Description of video 2',
  },
  {
    link: 'https://www.youtube.com/watch?v=Dbog8Yw3kEM&ab_channel=AIExplained',
    title: 'Video 1 Title',
    description: 'Description of video 1',
  },
  {
    link: 'https://www.youtube.com/watch?v=lXLBTBBil2U&t=609s&ab_channel=StanfordGraduateSchoolofBusiness',
    title: 'Video 2 Title',
    description: 'Description of video 2',
  },
  // Add more videos as needed
];

const ParentVideo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoLink={video.link}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentVideo;
