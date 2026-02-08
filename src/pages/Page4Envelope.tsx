import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Heart } from 'lucide-react'
import { CONFIG } from '../config'

export default function Page4Envelope() {
  const navigate = useNavigate()

  useEffect(() => {
    // Create floating hearts
    const interval = setInterval(() => {
      const heart = document.createElement('div')
      heart.textContent = ['💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 5)]
      heart.className = 'fixed pointer-events-none text-3xl'
      heart.style.left = Math.random() * window.innerWidth + 'px'
      heart.style.bottom = '-40px'
      heart.style.zIndex = '1'
      document.body.appendChild(heart)
      
      heart.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
        { opacity: 0.7, offset: 0.1 },
        { transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
      ], {
        duration: 8000,
        easing: 'ease-out'
      }).onfinish = () => heart.remove()
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Photo collage background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-0">
        {CONFIG.photos.map((photo, i) => (
          <div
            key={i}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${photo.url})`,
              filter: 'brightness(0.4)'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated background hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Heart size={24 + Math.random() * 20} fill="currentColor" />
        </motion.div>
      ))}

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center relative z-10"
      >
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl md:text-4xl font-bold text-pink-900 mb-8"
        >
          {CONFIG.page4.title}
        </motion.h2>
        
        <motion.p className="text-xl text-pink-700 mb-8">{CONFIG.page4.subtitle}</motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/page5')}
          className="cursor-pointer inline-block"
        >
          <img
            src="/assets/envelope.png"
            alt="Love envelope"
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
          />
          <p className="text-pink-600 font-semibold mt-4 text-lg">Click to open 💌</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
