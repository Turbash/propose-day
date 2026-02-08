import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './dialog';

const loveNotes = [
  { title: '💕 Did You Know?', message: 'Every time you smile, my heart skips a beat!' },
  { title: '✨ Random Thought', message: 'You make ordinary moments feel extraordinary.' },
  { title: '💭 Just Saying', message: "I'm the luckiest person to have you in my life." },
];

export const SurpriseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(0);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
      setCurrentNote(Math.floor(Math.random() * loveNotes.length));
    }, 15000); // Show after 15 seconds

    return () => clearTimeout(timer);
  }, [hasShown]);

  const note = loveNotes[currentNote];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-pink-700">{note.title}</DialogTitle>
            <DialogDescription className="text-center text-lg pt-4 text-gray-700">
              {note.message}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="text-6xl"
            >
              💕
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
