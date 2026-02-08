import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ImageGallery } from '../components/ui/carousel-circular-image-gallery'
import { ArrowLeft } from 'lucide-react'

export default function Page9Presentation() {
  const navigate = useNavigate()

  useEffect(() => {
    // Mark this gift as visited
    const visited = JSON.parse(localStorage.getItem('visitedGifts') || '[]')
    if (!visited.includes('presentation')) {
      visited.push('presentation')
      localStorage.setItem('visitedGifts', JSON.stringify(visited))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 relative">
      {/* Back button overlay */}
      <div className="absolute top-6 left-6 z-[102]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/page6')}
          className="px-6 py-3 bg-white/90 backdrop-blur-sm text-pink-700 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-white transition-all"
        >
          <ArrowLeft size={20} />
          Back to Gifts
        </motion.button>
      </div>

      {/* Title overlay */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 z-[102] text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg px-6 py-3 bg-pink-500/80 backdrop-blur-sm rounded-full">
          Our Love Story 💕
        </h1>
      </motion.div>

      {/* Carousel component */}
      <ImageGallery />
    </div>
  )
}
