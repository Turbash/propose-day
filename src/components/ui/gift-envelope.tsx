import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GiftEnvelopeProps {
  color?: string;
  icon?: string;
  isOpened?: boolean;
  className?: string;
}

export function GiftEnvelope({ 
  color = '#ec4899', 
  icon = '💝',
  isOpened = false,
  className 
}: GiftEnvelopeProps) {
  return (
    <div className={cn("relative w-full h-48", className)}>
      <svg 
        viewBox="0 0 200 150" 
        className="w-full h-full drop-shadow-xl"
        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
      >
        {/* Envelope body */}
        <motion.rect
          x="20"
          y="40"
          width="160"
          height="100"
          rx="5"
          fill={color}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: isOpened ? 0.7 : 0.9 }}
        />
        
        {/* Envelope flap shadow */}
        <motion.path
          d="M 20 40 L 100 100 L 180 40"
          fill="rgba(0,0,0,0.1)"
        />
        
        {/* Envelope flap */}
        <motion.path
          d="M 20 40 L 100 95 L 180 40 L 100 15 Z"
          fill={color}
          style={{ filter: 'brightness(1.1)' }}
          animate={{
            d: isOpened 
              ? "M 20 40 L 100 5 L 180 40 L 100 15 Z"
              : "M 20 40 L 100 95 L 180 40 L 100 15 Z"
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        {/* Envelope seal */}
        <motion.circle
          cx="100"
          cy="60"
          r="12"
          fill="#fbbf24"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
          animate={{
            cy: isOpened ? 30 : 60,
            scale: isOpened ? 0.8 : 1
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Heart seal detail */}
        <motion.path
          d="M 100 55 L 103 58 L 100 61 L 97 58 Z"
          fill="#fff"
          animate={{
            d: isOpened 
              ? "M 100 25 L 103 28 L 100 31 L 97 28 Z"
              : "M 100 55 L 103 58 L 100 61 L 97 58 Z",
            scale: isOpened ? 0.8 : 1
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Bottom envelope flap */}
        <motion.rect
          x="20"
          y="130"
          width="160"
          height="10"
          rx="0 0 5 5"
          fill={color}
          style={{ filter: 'brightness(0.9)' }}
        />
      </svg>
      
      {/* Icon floating above */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-5xl"
        animate={{
          y: isOpened ? [-16, -24, -16] : [-16, -12, -16],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {icon}
      </motion.div>
    </div>
  );
}
