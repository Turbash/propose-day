import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CONFIG } from '../config'
import { ScratchToReveal } from '../components/ui/scratch-to-reveal'
import { SparklesBackground } from '../components/ui/sparkles-background'

export default function Page5Letter() {
  const navigate = useNavigate()
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Photo collage background */}
      <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-0">
        {[...CONFIG.photos, ...CONFIG.photos].slice(0, 35).map((photo, i) => (
          <div
            key={i}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${photo.url})`,
              filter: 'brightness(0.35)'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <SparklesBackground />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-2xl w-full relative z-10"
      >
        {/* Instruction text */}
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <p className="text-2xl md:text-3xl font-script text-pink-800 drop-shadow-lg">
              ✨ Scratch to reveal your letter ✨
            </p>
          </motion.div>
        )}

        <ScratchToReveal
          width={window.innerWidth > 768 ? 600 : Math.min(window.innerWidth - 32, 400)}
          height={window.innerWidth > 768 ? 650 : 580}
          minScratchPercentage={60}
          className="rounded-3xl border-2 border-pink-200 shadow-2xl mx-auto"
          onComplete={() => setIsRevealed(true)}
          gradientColors={["#f9a8d4", "#fb7185", "#f43f5e"]}
        >
          <div className="w-full h-full bg-white/95 backdrop-blur-sm p-6 md:p-10 overflow-y-auto max-h-full">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-script text-pink-800 mb-3">
                {CONFIG.page5.greeting}
              </h3>
            </div>
            
            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              {CONFIG.page5.letter.split('\\n\\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="text-right">
              <p className="text-lg md:text-xl font-script text-pink-700 mb-6">
                {CONFIG.page5.signature} 💕
              </p>
            </div>
            
            {isRevealed && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/page6')}
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-full text-lg font-bold shadow-lg"
              >
                Continue 🎁
              </motion.button>
            )}
          </div>
        </ScratchToReveal>
      </motion.div>
    </div>
  )
}
