
import { useState } from "react";
import { motion } from "framer-motion";

export function DotGridBanner() {
  // Track which dots are active (highlighted)
  const [activeDots, setActiveDots] = useState<{[key: string]: boolean}>({});
  
  // Grid dimensions
  const rows = 15;
  const cols = 30;
  
  // Handle mouse enter for a specific dot
  const handleMouseEnter = (rowIndex: number, colIndex: number) => {
    const newActiveDots = {...activeDots};
    
    // Activate the current dot and surrounding dots (creating a glow effect)
    for (let r = Math.max(0, rowIndex-2); r <= Math.min(rows-1, rowIndex+2); r++) {
      for (let c = Math.max(0, colIndex-2); c <= Math.min(cols-1, colIndex+2); c++) {
        const distance = Math.sqrt(Math.pow(r-rowIndex, 2) + Math.pow(c-colIndex, 2));
        if (distance <= 2.5) {
          newActiveDots[`${r}-${c}`] = true;
        }
      }
    }
    
    setActiveDots(newActiveDots);
  };
  
  // Handle mouse leave - gradually fade out dots
  const handleMouseLeave = () => {
    setActiveDots({});
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-stone-900/30 z-0"></div>
      
      {/* Dot grid */}
      <div 
        className="absolute inset-0 z-10"
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid grid-cols-30 gap-[8px] p-4">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            Array.from({ length: cols }).map((_, colIndex) => {
              const isActive = activeDots[`${rowIndex}-${colIndex}`];
              return (
                <motion.div
                  key={`dot-${rowIndex}-${colIndex}`}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isActive 
                      ? 'bg-teal-400 shadow-lg shadow-teal-400/50' 
                      : 'bg-teal-900/40'
                  }`}
                  animate={{
                    scale: isActive ? [1, 1.5, 1.2] : 1,
                    opacity: isActive ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                />
              );
            })
          ))}
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ClinicNexus Administration
          </motion.h1>
          <motion.p 
            className="text-xl text-teal-100/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Manage your medical facilities with our powerful administrative tools
          </motion.p>
        </div>
      </div>
    </div>
  );
}
