
import React, { useEffect, useState, useRef } from 'react';

export type LunaMood = 'neutral' | 'surprised' | 'sad' | 'winking' | 'thinking' | 'excited' | 'determined';

interface LunaMascotProps {
  mood: LunaMood;
  onClick: () => void;
}

/**
 * 🎓 PRO TIP FOR VERCEL DEPLOYMENTS:
 * 
 * GitHub Raw (raw.githubusercontent.com) is NOT a video CDN. It often fails 
 * on production sites because it doesn't support "Byte Range" requests 
 * which allow browsers to buffer.
 */
const MOOD_VIDEOS: Record<string, string> = {
  sleeping: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/2916fb94ea2b0fd63b280eade78ed2eb9a7b6aae/luna_sleeping.mp4.mp4', 
  neutral: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/afd36711213481c1aadd1766cf046358c89b69e4/Video_Generation_Request_Fulfilled.mp4',
  surprised: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/386507bb5235c293dc32bba01827a086c3cecbb4/Video_Generation_Surprised_Expression.mp4', 
  sad: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/9ebb7b92e15c615b110ad1c40c5e122d6846c753/Sad_Expression_Video_Ready.mp4',
  winking: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/8c37fce6012d0e92a20be616b07615ff4d30ce4e/Video_Generation_For_Winking.mp4',
  thinking: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/15f229a0a8f8bf1ea575c1cf868cdcc527832eef/Video_Ready_After_Thinking.mp4',
  excited: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/4dc97b1f6641ced6a2fa683e51eddf4652146e5c/Video_Ready_For_Excitement.mp4',
  determined: 'https://raw.githubusercontent.com/shalakakashikar-sudo/Lumi/afd36711213481c1aadd1766cf046358c89b69e4/React_Component_Video_Integration.mp4',
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=1200";

const LunaMascot: React.FC<LunaMascotProps> = ({ mood, onClick }) => {
  const [isSleeping, setIsSleeping] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    setVideoError(false);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [mood, isSleeping]);

  const activeVideo = isSleeping ? MOOD_VIDEOS.sleeping : (MOOD_VIDEOS[mood] || MOOD_VIDEOS.neutral);

  const handleMascotClick = () => {
    // Unmute after the first interaction to comply with browser policies
    setIsMuted(false);
    onClick();
  };

  return (
    <div className="relative group w-full max-w-xl xl:max-w-2xl">
      <div 
        className="relative aspect-video w-full cursor-pointer transition-all duration-700 ease-in-out hover:brightness-105"
        onClick={handleMascotClick}
      >
        <div className="absolute inset-10 rounded-[2.5rem] bg-indigo-500/20 blur-[80px] group-hover:bg-indigo-500/30 transition-all duration-700"></div>
        
        <div className="relative w-full h-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/40 bg-slate-900">
          
          {isLoading && activeVideo && !videoError && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {activeVideo && !videoError ? (
            <video
              ref={videoRef}
              key={activeVideo} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              crossOrigin="anonymous"
              onLoadedData={() => setIsLoading(false)}
              onError={(e) => {
                const videoTarget = e.target as HTMLVideoElement;
                const err = videoTarget.error;
                let message = 'Unknown Video Error';
                if (err) {
                  switch (err.code) {
                    case 1: message = 'Aborted'; break;
                    case 2: message = 'Network Error'; break;
                    case 3: message = 'Decoding Error'; break;
                    case 4: message = 'Source Not Supported'; break;
                  }
                }
                console.error(`Video Error [${activeVideo}]: ${message} (Code: ${err?.code || 'N/A'})`);
                setVideoError(true);
                setIsLoading(false);
              }}
            >
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img 
              src={FALLBACK_IMAGE} 
              alt="Fallback" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
             <div className="px-5 py-2 bg-indigo-600/90 backdrop-blur-xl rounded-full shadow-2xl border border-indigo-400/50">
                <span className="text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                  {isMuted ? 'Click to Unmute & Wake' : 'Cycle Mood'}
                </span>
             </div>
          </div>

          {videoError && activeVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/70 backdrop-blur-sm z-10">
              <span className="text-rose-400 font-black text-xs uppercase tracking-widest mb-2">Streaming Error</span>
              <p className="text-white/80 text-[10px] font-bold max-w-xs leading-relaxed">
                The host (GitHub) blocked this video stream on Vercel. <br/>
                <span className="mt-2 block opacity-60">Falling back to static image...</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LunaMascot;
