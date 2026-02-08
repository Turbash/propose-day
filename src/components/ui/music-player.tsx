import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a romantic royalty-free music URL
  const musicUrl = './assets/song.m4a';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      
      // Attempt to autoplay
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            // Autoplay was prevented by browser
            console.log('Autoplay prevented:', error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <motion.div
          animate={{ width: isExpanded ? 200 : 56 }}
          className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-full shadow-lg overflow-hidden"
        >
          <div className="flex items-center justify-between h-14 px-4">
            <button
              onClick={togglePlay}
              className="text-white hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Music size={20} className="text-white animate-pulse" />
                <button onClick={toggleMute} className="text-white hover:scale-110 transition-transform">
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
