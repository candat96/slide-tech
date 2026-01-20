import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  onToggleFullscreen
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-dark/90 backdrop-blur-md border-t border-gray-800 flex items-center justify-between px-8 z-50">
      <div className="flex items-center text-gray-400 text-sm font-medium">
        HOPITA TECH DECK <span className="mx-2">•</span> {currentSlide + 1} / {totalSlides}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-surface transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-white"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-1">
            {Array.from({ length: totalSlides }).map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-gray-700'}`}
                />
            ))}
        </div>

        <button 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full hover:bg-surface transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-white"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <button 
        onClick={onToggleFullscreen}
        className="p-2 rounded-full hover:bg-surface text-gray-400 hover:text-white transition-colors"
        aria-label="Toggle Fullscreen"
      >
        <Maximize2 size={20} />
      </button>
    </div>
  );
};