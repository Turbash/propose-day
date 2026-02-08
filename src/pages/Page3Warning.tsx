import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CONFIG } from '../config'

export default function Page3Warning() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-6">
          {CONFIG.page3.title}
        </h2>
        
        <motion.div
          animate={{ 
            boxShadow: [
              '0 10px 40px rgba(255, 71, 126, 0.18), 0 2px 8px rgba(0,0,0,0.1), 0 0 0 3px rgba(255, 71, 126, 0.08)',
              '0 10px 50px rgba(255, 71, 126, 0.3), 0 2px 12px rgba(0,0,0,0.1), 0 0 0 6px rgba(255, 71, 126, 0.15)',
              '0 10px 40px rgba(255, 71, 126, 0.18), 0 2px 8px rgba(0,0,0,0.1), 0 0 0 3px rgba(255, 71, 126, 0.08)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-br from-white via-pink-50/50 to-pink-50 border-3 rounded-3xl overflow-hidden relative"
          style={{
            borderWidth: '3px',
            borderColor: '#ff477e',
            background: 'linear-gradient(145deg, #fff5f7, #ffffff, #fff0f5)'
          }}
        >
          {/* Top caution tape */}
          <div 
            className="py-1.5 text-center overflow-hidden text-xs font-extrabold tracking-wider whitespace-nowrap"
            style={{
              background: 'repeating-linear-gradient(-45deg, #ffcc00, #ffcc00 10px, #1a1a1a 10px, #1a1a1a 20px)',
              color: '#1a1a1a',
              textShadow: '0 0 1px rgba(255,255,255,0.5)',
              letterSpacing: '2px'
            }}
          >
            ⚠ CAUTION ⚠ CAUTION ⚠ CAUTION ⚠ CAUTION ⚠
          </div>
          
          {/* Warning icon */}
          <div className="mt-3.5 mb-2">
            <motion.span
              animate={{ 
                rotate: [-8, 8, -8, 8, -8],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block text-5xl"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(255, 71, 126, 0.3))'
              }}
            >
              🚨
            </motion.span>
          </div>
          
          {/* Warning header */}
          <motion.div
            animate={{
              boxShadow: [
                '0 4px 15px rgba(255, 71, 126, 0.35)',
                '0 4px 25px rgba(255, 71, 126, 0.55), 0 0 10px rgba(255, 71, 126, 0.2)',
                '0 4px 15px rgba(255, 71, 126, 0.35)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-7 py-2 rounded-full text-white font-extrabold text-lg md:text-xl mb-3 tracking-widest uppercase"
            style={{
              background: 'linear-gradient(135deg, #ff477e 0%, #e8194e 50%, #dc2626 100%)'
            }}
          >
            {CONFIG.page3.warningTitle}
          </motion.div>
          
          {/* Warning lines */}
          <div className="space-y-0.5 px-6 pb-3" style={{ fontFamily: 'cursive' }}>
            {CONFIG.page3.warningLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.15,
                  duration: 0.4
                }}
                className="text-xl md:text-2xl font-bold text-gray-900"
              >
                {line}
              </motion.div>
            ))}
          </div>
          
          {/* Bottom caution tape */}
          <div 
            className="py-1.5 text-center overflow-hidden text-xs font-extrabold tracking-wider whitespace-nowrap mt-3"
            style={{
              background: 'repeating-linear-gradient(-45deg, #ffcc00, #ffcc00 10px, #1a1a1a 10px, #1a1a1a 20px)',
              color: '#1a1a1a',
              textShadow: '0 0 1px rgba(255,255,255,0.5)',
              letterSpacing: '2px'
            }}
          >
            ⚠ CAUTION ⚠ CAUTION ⚠ CAUTION ⚠ CAUTION ⚠
          </div>
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/page4')}
          className="mt-6 px-10 py-4 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white rounded-full text-xl md:text-2xl font-bold shadow-lg"
        >
          I'm Brave Enough 💪🚀
        </motion.button>
      </motion.div>
    </div>
  )
}
