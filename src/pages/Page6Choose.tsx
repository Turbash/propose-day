import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CONFIG } from '../config'
import { toast } from 'sonner'

export default function Page6Choose() {
  const navigate = useNavigate()
  const [visitedGifts, setVisitedGifts] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load visited gifts from localStorage
    const saved = localStorage.getItem('visitedGifts')
    if (saved) {
      setVisitedGifts(new Set(JSON.parse(saved)))
    }
  }, [])

  const handleChoice = (id: string) => {
    // Mark as visited
    const newVisited = new Set(visitedGifts)
    newVisited.add(id)
    localStorage.setItem('visitedGifts', JSON.stringify([...newVisited]))
    setVisitedGifts(newVisited)

    // Show toast notification
    const gift = CONFIG.page6.options.find(opt => opt.id === id)
    if (gift) {
      toast.success(`✨ Opening ${gift.title}! ✨`, { duration: 2000 })
    }

    if (id === 'memories') {
      navigate('/memories')
    } else if (id === 'roses') {
      navigate('/roses')
    }
  }

  const allGiftsVisited = visitedGifts.size === 2

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-red-100 flex items-center justify-center px-4 py-12 relative overflow-hidden">
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
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center max-w-4xl relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 mb-4">
          {CONFIG.page6.title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          {CONFIG.page6.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {CONFIG.page6.options.map((option, index) => {
            const isVisited = visitedGifts.has(option.id)
            return (
              <motion.div
                key={option.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice(option.id)}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl cursor-pointer border-4 transition-all transform-gpu perspective-1000 ${
                  isVisited 
                    ? 'border-green-400 bg-green-50/50' 
                    : 'border-pink-200 hover:border-pink-400'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative mb-4 h-48">
                  {/* Layered envelope effect with multiple images */}
                  <img
                    src="/assets/gift-envelope3.png"
                    alt="envelope layer"
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-lg opacity-30 transform rotate-6"
                    style={{ filter: isVisited ? 'brightness(0.85) saturate(0.7)' : 'none' }}
                  />
                  <img
                    src="/assets/gift-envelope2.png"
                    alt="envelope layer"
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-lg opacity-40 transform -rotate-3"
                    style={{ filter: isVisited ? 'brightness(0.85) saturate(0.7)' : 'none' }}
                  />
                  <img
                    src={option.id === 'roses' ? '/assets/gift-envelope1.png' : '/assets/gift-envelope3.png'}
                    alt={`${option.title} gift`}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                    style={{ filter: isVisited ? 'brightness(0.85) saturate(0.7)' : 'none' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl pointer-events-none">
                    {option.emoji}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-pink-900 mb-2">{option.title}</h3>
                <p className="text-lg text-pink-700">{option.subtitle}</p>
                {isVisited && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-3 text-green-600 font-semibold flex items-center justify-center gap-2"
                  >
                    <span className="text-2xl">✓</span> Opened
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {allGiftsVisited && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            onClick={() => navigate('/final')}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-full text-xl font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Ready for the Big Question? 💕
          </motion.button>
        )}
        
        {!allGiftsVisited && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-lg text-pink-600 font-semibold"
          >
            ✨ Open both gifts to continue ✨
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
