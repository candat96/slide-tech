import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { Controls } from './components/Controls';

export const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-screen h-screen bg-dark text-white overflow-hidden flex flex-col relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Slide Container */}
      <main className="flex-1 relative z-10 transition-all duration-500 ease-in-out">
        <div className="w-full h-full max-w-[1920px] mx-auto pb-16">
          <SlideRenderer slide={SLIDES[currentSlideIndex]} />
        </div>
      </main>

      {/* Controls */}
      <Controls 
        currentSlide={currentSlideIndex} 
        totalSlides={SLIDES.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
};