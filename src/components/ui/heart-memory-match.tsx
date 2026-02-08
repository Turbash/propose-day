import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MemoryCard {
  id: number;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
  gridPosition: { row: number; col: number };
}

interface HeartMemoryMatchProps {
  images: string[];
  onComplete?: () => void;
}

export function HeartMemoryMatch({ images, onComplete }: HeartMemoryMatchProps) {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);

  // Smaller heart mask with fewer cards - 9x7 grid
  const HEART_MASK = [
    "011010110",
    "111111111",
    "111111111",
    "011111110",
    "001111100",
    "000111000",
    "000010000",
  ];

  // Count total cells in mask (this controls everything)
  const HEART_CELLS = HEART_MASK.join("").split("").filter(c => c === "1").length;
  console.log('Heart cells required:', HEART_CELLS);

  // Initialize cards based on MASK requirements (not arbitrary)
  useEffect(() => {
    const pairCount = Math.floor(HEART_CELLS / 2);
    const selectedImages = images.slice(0, pairCount);
    
    // Build deck to exactly match mask cell count
    const deck = selectedImages
      .flatMap(img => [img, img]) // Create pairs
      .sort(() => Math.random() - 0.5); // Shuffle
    
    // Pad with extra images if needed to reach exact HEART_CELLS count
    while (deck.length < HEART_CELLS) {
      deck.push(selectedImages[deck.length % selectedImages.length]);
    }
    
    deck.length = HEART_CELLS; // Ensure exact count

    let cardIndex = 0;
    const newCards: MemoryCard[] = [];
    
    HEART_MASK.forEach((row, r) => {
      row.split("").forEach((cell, c) => {
        if (cell === "1") {
          newCards.push({
            id: cardIndex,
            imageUrl: deck[cardIndex],
            isFlipped: false,
            isMatched: false,
            gridPosition: { row: r, col: c },
          });
          cardIndex++;
        }
      });
    });
    
    setCards(newCards);
  }, [images]);

  // Handle card click
  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(id)) return;
    if (cards[id].isMatched) return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first].imageUrl === cards[second].imageUrl) {
        // Match found
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, isMatched: true }
                : card
            )
          );
          setMatchedPairs(matchedPairs + 1);
          setFlippedCards([]);
          
          if (matchedPairs + 1 === Math.floor(HEART_CELLS / 2)) {
            setTimeout(() => onComplete?.(), 500);
          }
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="w-full mx-auto p-1 md:p-2">
      {/* Heart-shaped grid */}
      <div className="relative mx-auto w-full max-w-[95vw] md:max-w-[700px]" style={{ aspectRatio: '9/7', maxHeight: '85vh' }}>
        <div className="relative z-10 p-0.5 md:p-4 h-full">
        <div 
          className="grid gap-1 md:gap-4 w-full h-full"
          style={{ 
            gridTemplateColumns: 'repeat(9, 1fr)',
            gridTemplateRows: 'repeat(7, 1fr)'
          }}
        >
          {HEART_MASK.flatMap((row, r) =>
            row.split("").map((cell, c) => {
              if (cell === "0") {
                return <div key={`${r}-${c}`} className="w-full h-full" style={{ visibility: 'hidden' }} />;
              }

              const card = cards.find(card => card.gridPosition.row === r && card.gridPosition.col === c);
              
              if (!card) {
                return <div key={`${r}-${c}`} className="w-full h-full" style={{ visibility: 'hidden' }} />;
              }

              return (
                <motion.button
                  key={`${r}-${c}`}
                  onClick={() => handleCardClick(card.id)}
                  className="relative w-full h-full focus:outline-none perspective-1000"
                  disabled={card.isMatched}
                  style={{ perspective: '1000px' }}
                  whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
                  whileTap={{ scale: card.isMatched ? 1 : 0.95 }}
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                      card.isFlipped || card.isMatched ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front side - Photo collage background */}
                    <div 
                      className="absolute inset-0 backface-hidden rounded-lg border-2 border-white/30 shadow-lg overflow-hidden"
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&q=60)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.7) blur(0.3px)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20"></div>
                    </div>
                    
                    {/* Back side - Actual memory image */}
                    <div 
                      className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg border-2 border-white/50 shadow-xl overflow-hidden"
                      style={{
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                    </div>
                  </div>
                </motion.button>
              );
            })
          )}
        </div>
        </div>
      </div>
      
      {/* Moved overlays completely outside heart container */}
      <div className="flex justify-between items-start mt-3 px-2">
        {/* Left text */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl px-3 py-2 md:px-5 md:py-3 shadow-xl border-2 border-pink-200">
          <p className="text-gray-800 text-xs md:text-base font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Match the photo pairs
          </p>
        </div>
        
        {/* Right score */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl px-3 py-2 md:px-5 md:py-3 shadow-xl border-2 border-pink-200">
          <p className="text-pink-600 text-xs md:text-sm font-bold">
            <span className="text-xl md:text-2xl font-extrabold">{matchedPairs}</span>
            <span className="text-gray-400 mx-1">/</span>
            <span className="text-gray-600">{Math.floor(HEART_CELLS / 2)}</span>
          </p>
          <p className="text-[10px] md:text-xs text-gray-500 font-medium mt-0.5">{moves} moves</p>
        </div>
      </div>

      {/* Completion message */}
      {matchedPairs === Math.floor(HEART_CELLS / 2) && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="mt-6 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-2xl p-6 text-center shadow-2xl border-4 border-white/50"
        >
          <p className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span className="text-4xl">�</span> 
            Here's Your Award! 
            <span className="text-4xl">✨</span>
          </p>
          <p className="text-sm md:text-base font-medium opacity-90">Completed in {moves} moves</p>
        </motion.div>
      )}
    </div>
  );
}
