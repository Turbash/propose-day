import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { CONFIG } from '../config'
import { SparklesBackground } from '../components/ui/sparkles-background'

export default function Page1Opening() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/page2')
    }, 3500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Photo collage background */}
      <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-0">
        {[...CONFIG.photos, ...CONFIG.photos].slice(0, 35).map((photo, i) => (
          <div
            key={i}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${photo.url})`,
              filter: 'brightness(0.25) grayscale(0.3)'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <SparklesBackground />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-light text-white/90 italic leading-relaxed">
          "<TypeAnimation
            sequence={[
              CONFIG.openingQuote,
              2000,
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
          />"
        </h1>
      </motion.div>
    </motion.div>
  )
}
