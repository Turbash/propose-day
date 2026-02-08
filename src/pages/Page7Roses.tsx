import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CONFIG } from '../config'
import { HeartMemoryMatch } from '../components/ui/heart-memory-match'
import { toast } from 'sonner'

export default function Page7MemoryMatch() {
  const navigate = useNavigate()

  useEffect(() => {
    // Mark this gift as visited
    const visited = JSON.parse(localStorage.getItem('visitedGifts') || '[]')
    if (!visited.includes('roses')) {
      visited.push('roses')
      localStorage.setItem('visitedGifts', JSON.stringify(visited))
    }
  }, [])

  const handleGameComplete = () => {
    toast.success('🎉 Perfect! Here is your award... 🎁', {
      duration: 2000
    })
    // Navigate to presentation after a delay
    setTimeout(() => {
      navigate('/presentation')
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-4 md:py-8 px-2 md:px-4 relative overflow-hidden flex items-center justify-center">
      {/* Photo collage background - improved */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-10 grid-rows-6 gap-0">
        {[...CONFIG.photos, ...CONFIG.photos].slice(0, 24).map((photo, i) => (
          <div
            key={i}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${photo.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3) saturate(1.1)'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-black/60"></div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <HeartMemoryMatch 
            images={CONFIG.photos.map(p => p.url)}
            onComplete={handleGameComplete}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
