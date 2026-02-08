import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CONFIG } from '../config'
import ExpandCards from '../components/ui/expand-cards'
import { ThumbnailsCarousel } from '../components/ui/signature'

export default function Page8Memories() {
  const navigate = useNavigate()

  useEffect(() => {
    // Mark this gift as visited
    const visited = JSON.parse(localStorage.getItem('visitedGifts') || '[]')
    if (!visited.includes('memories')) {
      visited.push('memories')
      localStorage.setItem('visitedGifts', JSON.stringify(visited))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 py-12 px-4 relative overflow-hidden">
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

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 mb-4">
            Our Beautiful Memories
          </h1>
          <p className="text-2xl md:text-3xl text-pink-800 font-semibold mb-4">
            {CONFIG.personName} 📸
          </p>
          <p className="text-lg text-pink-600 hidden md:block">
            ✨ Hover over each photo to expand ✨
          </p>
          <p className="text-lg text-pink-600 md:hidden">
            ✨ Swipe through our memories ✨
          </p>
        </div>

        {/* Mobile: Thumbnails Carousel */}
        <div className="mb-12 md:hidden">
          <ThumbnailsCarousel images={CONFIG.photos} />
        </div>

        {/* Desktop: Expand Cards Gallery */}
        <div className="mb-12 h-[28rem] hidden md:block">
          <ExpandCards 
            images={CONFIG.photos.map(photo => photo.url)} 
            defaultExpanded={4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
            Every moment with you is a treasure. These photos are just glimpses of the 
            beautiful journey we've shared together. Here's to countless more memories! 💕
          </p>
        </motion.div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/page6')}
            className="px-8 py-3 bg-white/80 text-pink-700 rounded-full font-bold hover:bg-white transition-all shadow-lg"
          >
            ← Back to Gifts
          </button>
        </div>
      </motion.div>

    </div>
  )
}
