import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import { CONFIG } from '../config'
import { triggerConfetti, triggerFireworks, triggerHeartExplosion } from '../components/ui/confetti'
import { toast } from 'sonner'
import { SparklesBackground } from '../components/ui/sparkles-background'

export default function Page10Final() {
  const [showYes, setShowYes] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noClickCount, setNoClickCount] = useState(0)
  const [photos] = useState(CONFIG.photos.slice(0, 24))

  const handleYesClick = () => {
    setShowYes(true)
    triggerConfetti()
    setTimeout(() => triggerFireworks(), 1000)
    setTimeout(() => triggerHeartExplosion(), 2000)
    toast.success('🎉 YES! Best decision ever! 💕', {
      duration: 5000,
    })
  }

  useEffect(() => {
    // Preload images for smooth display
    photos.forEach(photo => {
      const img = new Image()
      img.src = photo.url
    })

    // Create heart shower
    const interval = setInterval(() => {
      const heart = document.createElement('div')
      heart.textContent = ['💕', '💖', '💗', '💓', '💝', '🩷'][Math.floor(Math.random() * 6)]
      heart.className = 'fixed pointer-events-none text-3xl'
      heart.style.left = Math.random() * window.innerWidth + 'px'
      heart.style.top = '-40px'
      heart.style.zIndex = '1'
      document.body.appendChild(heart)
      
      heart.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
        { opacity: 0.8, offset: 0.1 },
        { transform: `translateY(${window.innerHeight + 40}px) rotate(360deg)`, opacity: 0 }
      ], {
        duration: 6000,
        easing: 'ease-in-out'
      }).onfinish = () => heart.remove()
    }, 400)

    return () => clearInterval(interval)
  }, [])

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (noClickCount >= 5) {
      alert("Come on! You know you want to say YES! 💕")
      return
    }
    
    // Move button to random position
    const maxX = window.innerWidth - 200
    const maxY = window.innerHeight - 100
    
    const newX = Math.random() * maxX - maxX / 2
    const newY = Math.random() * maxY - maxY / 2
    
    setNoButtonPos({ x: newX, y: newY })
    setNoClickCount(prev => prev + 1)
  }

  if (showYes) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center px-4 relative overflow-hidden"
      >
        {/* Photo collage background */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-0">
          {[...photos, ...photos].map((photo, i) => (
            <div
              key={i}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${photo.url})`,
                filter: 'brightness(0.5)'
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Fireworks effect */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: (Math.random() - 0.5) * 800,
              y: (Math.random() - 0.5) * 800,
              opacity: [1, 0],
              scale: [0, 1.5],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {['💕', '💖', '💗', '✨', '🎉', '🎊', '💝'][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}

        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            className="text-8xl mb-6"
          >
            🎉
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 mb-6">
            YES!!! 💕
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6">
            You Said Yes!
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            You've just made me the happiest person alive! I promise to love you, 
            cherish you, and make you smile every single day. Thank you for choosing me! 
          </p>
          
          <div className="flex items-center justify-center gap-2 text-2xl text-pink-600">
            <Heart fill="currentColor" size={32} />
            <span>Forever & Always</span>
            <Heart fill="currentColor" size={32} />
          </div>

          <p className="mt-8 text-lg text-pink-700 font-semibold">
            This is just the beginning of our beautiful forever! 💕
          </p>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Photo collage background */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-0">
        {[...photos, ...photos].map((photo, i) => (
          <div
            key={i}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${photo.url})`,
              filter: 'brightness(0.3)'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <SparklesBackground />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl mb-6"
        >
          👑
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-script text-pink-700 mb-4">
          {CONFIG.finalPage.title}
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-6">
          {CONFIG.finalPage.question}
        </h2>

        <motion.img
          whileHover={{ scale: 1.05 }}
          src={CONFIG.finalPage.gif}
          alt="Proposal"
          className="w-48 h-48 mx-auto mb-6 rounded-2xl shadow-lg object-cover"
        />

        <p className="text-lg text-gray-600 mb-8 italic">
          {CONFIG.finalPage.message}
        </p>

        <div className="flex gap-6 justify-center relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-full text-2xl font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
          >
            <Heart fill="white" size={24} />
            YES! 💕
            <Sparkles size={24} />
          </motion.button>

          <motion.button
            onClick={handleNoClick}
            className="px-10 py-4 bg-gray-300 text-gray-700 rounded-full text-2xl font-bold hover:bg-gray-400 transition-colors shadow-lg"
            style={{
              transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            No...?
          </motion.button>
        </div>

        {noClickCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-pink-600 font-semibold"
          >
            {noClickCount >= 3 ? "The button is running away! 😜" : "Hey, that button moved! 😉"}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
