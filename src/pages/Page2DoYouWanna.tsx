import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { CONFIG } from '../config'

export default function Page2DoYouWanna() {
  const navigate = useNavigate()
  const [noClickCount, setNoClickCount] = useState(0)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [showWarning, setShowWarning] = useState(false)
  const [showFinal, setShowFinal] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const handleNoClick = () => {
    if (noClickCount >= 6) {
      setShowFinal(true)
      return
    }

    if (noClickCount >= 3) {
      setShowWarning(true)
    }

    // Move button to random position
    const button = noButtonRef.current
    if (button) {
      const container = button.parentElement
      if (container) {
        const containerRect = container.getBoundingClientRect()
        const buttonRect = button.getBoundingClientRect()
        
        const maxX = containerRect.width - buttonRect.width - 40
        const maxY = containerRect.height - buttonRect.height - 40
        
        const newX = Math.random() * maxX - maxX / 2
        const newY = Math.random() * maxY - maxY / 2
        
        setNoButtonPos({ x: newX, y: newY })
      }
    }

    setNoClickCount(prev => prev + 1)
  }

  useEffect(() => {
    // Create floating elements
    const interval = setInterval(() => {
      const emoji = ['💕', '💖', '💗', '✨', '🌸'][Math.floor(Math.random() * 5)]
      const element = document.createElement('div')
      element.textContent = emoji
      element.className = 'fixed pointer-events-none text-2xl'
      element.style.left = Math.random() * window.innerWidth + 'px'
      element.style.bottom = '-40px'
      element.style.zIndex = '1'
      document.body.appendChild(element)
      
      element.animate([
        { transform: 'translateY(0)', opacity: 0 },
        { opacity: 0.7, offset: 0.1 },
        { transform: `translateY(-${window.innerHeight + 40}px)`, opacity: 0 }
      ], {
        duration: 6000 + Math.random() * 4000,
        easing: 'ease-out'
      }).onfinish = () => element.remove()
    }, 800)

    return () => clearInterval(interval)
  }, [])

  if (showFinal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-red-300 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.img
            src="/assets/cat-gun.gif"
            alt="Angry cat"
            className="w-64 h-64 mx-auto mb-8 rounded-2xl shake"
            animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
            THAT'S IT! I'M DONE! 😡
          </h2>
          <p className="text-xl text-red-600 mb-8">
            You really thought you could keep saying no?!
          </p>
          <button
            onClick={() => navigate('/page3')}
            className="px-8 py-4 bg-red-500 text-white rounded-full text-xl font-bold hover:bg-red-600 transition-all"
          >
            FINE, LET'S GO 😤
          </button>
        </motion.div>
      </div>
    )
  }

  if (showWarning) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.img
            src="/assets/cat-gun.gif"
            alt="Warning cat"
            className="w-64 h-64 mx-auto mb-8 rounded-2xl"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-8">
            DON'T YOU DARE CLICK NO AGAIN 😾
          </h2>
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => navigate('/page3')}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              YES 💕
            </button>
            <button
              ref={noButtonRef}
              onClick={handleNoClick}
              className="relative px-8 py-4 bg-gray-300 text-gray-700 rounded-full text-xl font-bold hover:bg-gray-400 transition-colors"
              style={{
                transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              NO
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ top: -100, left: -100 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ bottom: -100, right: -100 }}
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-pink-900 mb-4">
          {CONFIG.page2.title}
        </h2>
        <p className="text-xl md:text-2xl text-pink-700 mb-8">{CONFIG.page2.subtitle}</p>
        
        <motion.img
          src={CONFIG.page2.gif}
          alt="Cute couple"
          className="w-64 h-64 mx-auto mb-6 rounded-3xl shadow-2xl object-cover"
          whileHover={{ scale: 1.05 }}
        />
        
        <p className="text-lg text-pink-600 mb-8 italic">{CONFIG.page2.note}</p>
        
        <div className="flex gap-6 justify-center relative">
          <button
            onClick={() => navigate('/page3')}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-full text-xl md:text-2xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            YES 💕
          </button>
          <button
            ref={noButtonRef}
            onClick={handleNoClick}
            className="relative px-10 py-4 bg-gray-300 text-gray-700 rounded-full text-xl md:text-2xl font-bold hover:bg-gray-400 transition-colors shadow-lg"
            style={{
              transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            NO
          </button>
        </div>
      </motion.div>
    </div>
  )
}
