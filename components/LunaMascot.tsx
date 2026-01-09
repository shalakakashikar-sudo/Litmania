
import React, { useEffect, useState, useRef } from 'react';

export type LunaMood = 'neutral' | 'surprised' | 'sad' | 'winking' | 'thinking' | 'excited' | 'determined';

interface LunaMascotProps {
  mood: LunaMood;
  onClick: () => void;
}

/**
 * 🎓 DIRECT LINKING GUIDE FOR VIDEOS:
 * 
 * Your video tag requires a URL that points to the RAW FILE, not a web player.
 * 
 * 1. GITHUB FIX: 
 *    Incorrect: https://github.com/USER/REPO/blob/main/video.mp4
 *    Correct:   https://raw.githubusercontent.com/USER/REPO/main/video.mp4
 * 
 * 2. DROPBOX FIX: 
 *    Change "?dl=0" at the end to "?raw=1"
 */
const MOOD_VIDEOS: Record<string, string> = {
  // Corrected Raw GitHub Links:
  sleeping: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/2916fb94ea2b0fd63b280eade78ed2eb9a7b6aae/luna_sleeping.mp4.mp4', 
  neutral: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/adaa8901665693e0b1af657fabbccba89a5f6daa/Video_Generation_for_Neutral_Expression.mp4',
  surprised: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/386507bb5235c293dc32bba01827a086c3cecbb4/Video_Generation_Surprised_Expression.mp4', 
  sad: '',
  winking: '',
  thinking: '',
  excited: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/4dc97b1f6641ced6a2fa683e51eddf4652146e5c/Video_Ready_For_Excitement.mp4',
  determined: '',
};

// Fallback image if video link is empty or broken
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=1200";

const LunaMascot: React.FC<LunaMascotProps> = ({ mood, onClick }) => {
  const [isSleeping, setIsSleeping] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle Idle State (Sleeping)
  useEffect(() => {
    let idleTimer: number | undefined;
    const startTimer = () => {
      setIsSleeping(false);
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => setIsSleeping(true), 25000);
    };
    
    startTimer();
    const handleInput = () => startTimer();
    window.addEventListener('mousedown', handleInput);
    window.addEventListener('mousemove', handleInput);
    
    return () => {
      if (idleTimer) window.clearTimeout(idleTimer);
      window.removeEventListener('mousedown', handleInput);
      window.removeEventListener('mousemove', handleInput);
    };
  }, []);

  // Reset states when the video source changes
  useEffect(() => {
    setVideoError(false);
    setIsLoading(true);
  }, [mood, isSleeping]);

  const activeVideo = isSleeping ? MOOD_VIDEOS.sleeping : (MOOD_VIDEOS[mood] || MOOD_VIDEOS.neutral);

  return (
    <div className="relative group w-full max-w-xl xl:max-w-2xl">
      <div 
        className="relative aspect-video w-full cursor-pointer transition-all duration-700 ease-in-out hover:brightness-105"
        onClick={onClick}
      >
        {/* Aesthetic Glow effect */}
        <div className="absolute inset-10 rounded-[2.5rem] bg-indigo-500/20 blur-[80px] group-hover:bg-indigo-500/30 transition-all duration-700"></div>
        
        {/* Video Frame */}
        <div className="relative w-full h-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/40 bg-slate-900">
          
          {/* Loading Spinner */}
          {isLoading && activeVideo && !videoError && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {activeVideo && !videoError ? (
            <video
              ref={videoRef}
              key={activeVideo} 
              src={activeVideo}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsLoading(false)}
              onError={(e) => {
                console.error("Video source failed. Ensure you are using a DIRECT link:", activeVideo);
                setVideoError(true);
                setIsLoading(false);
              }}
            />
          ) : (
            <img 
              src={FALLBACK_IMAGE} 
              alt="Fallback" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
            />
          )}
          
          {/* Visual Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>
          
          {/* Status Label */}
          <div className="absolute top-6 right-8 flex flex-col items-end z-30">
            {isSleeping ? (
              <div className="flex flex-col items-center">
                <span className="text-white text-3xl font-black animate-bounce opacity-80">Z</span>
                <span className="text-white text-xl font-black animate-bounce delay-200 opacity-60 -mt-2">z</span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                 <div className={`w-2 h-2 rounded-full animate-pulse ${videoError ? 'bg-rose-400' : 'bg-emerald-400'}`}></div>
                 <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {videoError ? 'FALLBACK ACTIVE' : `LUMI: ${mood}`}
                 </span>
              </div>
            )}
          </div>

          {/* Interaction Prompt */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
             <div className="px-5 py-2 bg-indigo-600/90 backdrop-blur-xl rounded-full shadow-2xl border border-indigo-400/50">
                <span className="text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                  Wake or Change Mood
                </span>
             </div>
          </div>

          {/* Debugging Info (Visible only if video fails) */}
          {videoError && activeVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/70 backdrop-blur-sm z-10">
              <span className="text-rose-400 font-black text-xs uppercase tracking-widest mb-2">Direct Link Error</span>
              <p className="text-white/80 text-[10px] font-bold max-w-xs leading-relaxed">
                The URL provided is not a direct video file. <br/>
                <code className="bg-white/10 px-1 py-0.5 rounded mt-2 block overflow-hidden text-ellipsis whitespace-nowrap">{activeVideo}</code>
                <span className="mt-2 block opacity-60">Try using the "Raw" URL from GitHub.</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LunaMascot;
