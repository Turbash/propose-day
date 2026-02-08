import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Progress } from './progress';

const pageSteps = [
  { path: '/', name: 'Start' },
  { path: '/page1', name: 'Quote' },
  { path: '/page2', name: 'Question' },
  { path: '/page3', name: 'Warning' },
  { path: '/page4', name: 'Envelope' },
  { path: '/page5', name: 'Letter' },
  { path: '/page6', name: 'Gifts' },
  { path: '/roses', name: 'Heart' },
  { path: '/memories', name: 'Memories' },
  { path: '/presentation', name: 'Story' },
  { path: '/final', name: 'Proposal' },
];

export const ProgressTimeline = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentIndex = pageSteps.findIndex((step) => step.path === location.pathname);
    if (currentIndex !== -1) {
      const progressPercent = ((currentIndex + 1) / pageSteps.length) * 100;
      setProgress(progressPercent);
    }
  }, [location]);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md px-4 py-3"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-pink-700">Your Journey</span>
          <span className="text-xs text-gray-600">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </motion.div>
  );
};
