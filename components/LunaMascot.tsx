
import React, { useEffect, useState } from 'react';

export type LunaMood = 'neutral' | 'surprised' | 'sad' | 'winking' | 'thinking' | 'excited' | 'determined';

interface LunaMascotProps {
  mood: LunaMood;
  onClick: () => void;
}

/**
 * REPOSITORY ASSET INSTRUCTIONS:
 * 1. Create a folder named 'public' in your project root.
 * 2. Inside 'public', create a folder named 'assets'.
 * 3. Place your images (.jpg, .png, .webp) and videos (.mp4, .webm) there.
 * 4. Update the paths below. 
 *    NOTE: Vite automatically serves files in 'public' from the root path '/'.
 */
const MOOD_MEDIA: Record<string, string> = {
  sleeping: 'public/assets/sleeping.mp4',
  neutral: '/assets/neutral.mp4',
  surprised: '/assets/surprised.jpg',
  sad: '/assets/sad.jpg',
  winking: '/assets/winking.mp4',
  thinking: '/assets/thinking.jpg',
  excited: '/assets/excited.mp4',
  determined: '/assets/determined.jpg',
};

const LunaMascot: React.FC<LunaMascotProps> = ({ mood, onClick }) => {
  const [isSleeping, setIsSleeping] = useState(false);
  const [activeMedia, setActiveMedia] = useState(MOOD_MEDIA.neutral);
  const [prevMedia, setPrevMedia] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle idle state for "Sleeping" mode
  useEffect(() => {
    let idleTimer: number | undefined;
    const startTimer = () => {
      setIsSleeping(false);
      if (idleTimer) window.clearTimeout(idleTimer);
      // Mascot "sleeps" after 15 seconds of no activity
      idleTimer = window.setTimeout(() => setIsSleeping(true), 15000);
    };
    
    startTimer();
    const handleInput = () => startTimer();
    window.addEventListener('click', handleInput);
    window.addEventListener('mousemove', handleInput);
    window.addEventListener('keydown', handleInput);
    
    return () => {
      if (idleTimer) window.clearTimeout(idleTimer);
      window.removeEventListener('click', handleInput);
      window.removeEventListener('mousemove', handleInput);
      window.removeEventListener('keydown', handleInput);
    };
  }, [mood]);

  // Handle cross-fade transitions between moods
  useEffect(() => {
    const nextMedia = isSleeping ? MOOD_MEDIA.sleeping : MOOD_MEDIA[mood];
    if (nextMedia !== activeMedia) {
      setPrevMedia(activeMedia);
      setActiveMedia(nextMedia);
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isSleeping, mood, activeMedia]);

  const isVideo = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', 'video'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  const renderMedia = (url: string, className: string, style: React.CSSProperties) => {
    if (isVideo(url)) {
      return (
        <video
          key={url}
          src={url}
          className={className}
          style={style}
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => {
            // If local video fails (e.g. file missing), log warning and hide element
            console.warn("Local video not found at path:", url);
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        />
      );
    }
    return (
      <img
        key={url}
        src={url}
        alt="Mascot State"
        className={className}
        style={style}
        onError={(e) => {
          // Fallback if local image is missing
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=1200';
        }}
      />
    );
  };

  return (
    <div className="relative group w-full max-w-xl xl:max-w-2xl">
      <div 
        className="relative aspect-video w-full cursor-pointer transition-all duration-700 ease-in-out hover:brightness-105"
        onClick={() => isSleeping ? setIsSleeping(false) : onClick()}
      >
        {/* Glow effect behind the frame */}
        <div className="absolute inset-8 rounded-[2.5rem] bg-indigo-500/10 blur-[80px] animate-pulse"></div>
        
        {/* The Frame */}
        <div className="relative w-full h-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/40 bg-slate-900">
          {/* Previous media for fading out */}
          {prevMedia && renderMedia(prevMedia, "absolute inset-0 w-full h-full object-cover z-10", {})}
          
          {/* Current active media fading in */}
          {renderMedia(activeMedia, "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out z-20", {
            opacity: isTransitioning ? 0 : 1
          })}
          
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-30"></div>
          
          {/* Sleeping indicators */}
          {isSleeping && (
            <div className="absolute top-8 right-10 z-40 flex flex-col items-center">
              <span className="text-white text-3xl font-black animate-bounce delay-100 opacity-80 drop-shadow-lg">Z</span>
              <span className="text-white text-2xl font-black animate-bounce delay-300 opacity-60 ml-4 -mt-2 drop-shadow-lg">z</span>
              <span className="text-white text-xl font-black animate-bounce delay-500 opacity-40 ml-8 -mt-2 drop-shadow-lg">z</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LunaMascot;
