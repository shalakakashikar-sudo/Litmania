import React, { useEffect, useState, useCallback } from 'react';

export type LunaMood = 'neutral' | 'surprised' | 'sad' | 'winking' | 'thinking' | 'excited' | 'determined';

interface LunaMascotProps {
  mood: LunaMood;
  onClick: () => void;
}

const LunaMascot: React.FC<LunaMascotProps> = ({ mood, onClick }) => {
  const [isSleeping, setIsSleeping] = useState(false);

  const resetTimer = useCallback(() => {
    setIsSleeping(false);
  }, []);

  // --- IDLE TIMER LOGIC (Fixed for Browser Environment) ---
  useEffect(() => {
    let idleTimer: number | undefined;

    const startTimer = () => {
      setIsSleeping(false);
      if (idleTimer) window.clearTimeout(idleTimer);
      // Set to sleep after 12 seconds of inactivity
      idleTimer = window.setTimeout(() => setIsSleeping(true), 12000);
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

  const handleInteraction = () => {
    resetTimer();
    onClick();
  };

  // --- COMPONENT: Ultra-Kawaii Chibi Jewel Eye ---
  // Ensure parameters are strictly used to satisfy TS6133
  const ChibiEye = ({ isWinking, isClosed }: { isWinking?: boolean; isClosed?: boolean }) => {
    if (isClosed) {
      return (
        <g transform="translate(0, 8)">
          <path d="M-18,0 Q0,10 18,0" stroke="#2d1b0d" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
        </g>
      );
    }
    if (isWinking) {
      return (
        <g transform="translate(0, 5)">
          <path d="M-18,0 Q0,12 18,0" stroke="#2d1b0d" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M16,0 L22,-4" stroke="#2d1b0d" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      );
    }
    return (
      <g className="animate-[pulse_4s_infinite]">
        {/* Top Thick Lash Line */}
        <path d="M-22,-5 Q0,-22 22,-5" stroke="#2d1b0d" strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Side Lashes */}
        <path d="M20,-8 Q25,-12 28,-10" stroke="#2d1b0d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M22,-2 Q27,-4 30,-2" stroke="#2d1b0d" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* The Iris Masked Group */}
        <g clipPath="url(#chibiEyeClip)">
          <rect x="-25" y="-20" width="50" height="40" fill="white" />
          <circle cx="0" cy="2" r="16" fill="url(#chibiIrisGradient)" />
          <circle cx="0" cy="6" r="8" fill="#6366f1" opacity="0.4" filter="url(#glow)" />
          <circle cx="0" cy="4" r="7" fill="#1e1b4b" />
        </g>
        
        {/* Large Kawaii Highlights */}
        <circle cx="-8" cy="-6" r="5" fill="white" filter="url(#glow)" />
        <circle cx="6" cy="8" r="2.5" fill="white" opacity="0.8" />
        <circle cx="-2" cy="12" r="1.5" fill="white" opacity="0.6" />
      </g>
    );
  };

  // --- CHIBI EXPRESSIONS ---
  const getExpression = () => {
    if (isSleeping) {
      return {
        leftEye: <ChibiEye isClosed={true} />,
        rightEye: <ChibiEye isClosed={true} />,
        mouth: <circle cx="0" cy="25" r="3" fill="#f43f5e" opacity="0.5" />,
        brows: null,
        extra: (
          <g className="animate-[float_4s_ease-in-out_infinite]">
            <text x="40" y="-10" fontSize="18" fill="#6366f1" fontWeight="bold" opacity="0.6" fontStyle="italic">Z</text>
            <text x="55" y="-25" fontSize="12" fill="#6366f1" fontWeight="bold" opacity="0.4" fontStyle="italic">z</text>
          </g>
        )
      };
    }

    switch (mood) {
      case 'surprised':
        return {
          leftEye: <ChibiEye />,
          rightEye: <ChibiEye />,
          mouth: <circle cx="0" cy="25" r="5" fill="#f43f5e" opacity="0.7" />,
          brows: (
            <g transform="translate(0, -10)">
              <path d="M-35,-25 Q-20,-35 -5,-25" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
              <path d="M5,-25 Q20,-35 35,-25" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
            </g>
          )
        };
      case 'sad':
        return {
          leftEye: <g transform="translate(0, 5)"><ChibiEye /></g>,
          rightEye: <g transform="translate(0, 5)"><ChibiEye /></g>,
          mouth: <path d="M-10,28 Q0,22 10,28" stroke="#f43f5e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />,
          brows: (
            <g transform="translate(0, -5)">
              <path d="M-35,-20 Q-20,-15 -5,-25" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
              <path d="M5,-25 Q20,-15 35,-20" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
            </g>
          ),
          tear: (
            <g transform="translate(-15, 20)">
              <circle cx="0" cy="0" r="4" fill="#bae6fd" filter="url(#glow)" className="animate-bounce" />
              <path d="M-2,0 Q0,8 2,0" fill="#bae6fd" />
            </g>
          )
        };
      case 'winking':
        return {
          leftEye: <ChibiEye />,
          rightEye: <ChibiEye isWinking={true} />,
          mouth: <path d="M-8,25 Q0,32 8,25" stroke="#f43f5e" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />,
          brows: null
        };
      case 'thinking':
        return {
          leftEye: <g transform="translate(-2, -2)"><ChibiEye /></g>,
          rightEye: <g transform="translate(-2, -2)"><ChibiEye /></g>,
          mouth: <path d="M-6,28 L6,28" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" opacity="0.8" />,
          brows: (
            <g transform="translate(0, -8)">
              <path d="M-35,-25 Q-20,-28 -5,-25" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
              <path d="M5,-30 Q20,-35 35,-28" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
            </g>
          )
        };
      case 'excited':
        return {
          leftEye: <ChibiEye />,
          rightEye: <ChibiEye />,
          mouth: <path d="M-10,22 Q0,35 10,22" fill="#f43f5e" opacity="0.9" />,
          brows: null,
          extra: (
            <g className="animate-pulse">
              <path d="M-50,-20 L-40,-30 M-50,-30 L-40,-20" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
              <path d="M50,-20 L40,-30 M50,-30 L40,-20" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
            </g>
          )
        };
      case 'determined':
        return {
          leftEye: <ChibiEye />,
          rightEye: <ChibiEye />,
          mouth: <path d="M-8,28 Q0,25 8,28" stroke="#f43f5e" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9" />,
          brows: (
            <g transform="translate(0, 5)">
              <path d="M-35,-30 Q-20,-22 -5,-30" stroke="#1e1b4b" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
              <path d="M5,-30 Q20,-22 35,-30" stroke="#1e1b4b" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
            </g>
          )
        };
      default: // Neutral
        return {
          leftEye: <ChibiEye />,
          rightEye: <ChibiEye />,
          mouth: <path d="M-6,26 Q0,30 6,26" stroke="#f43f5e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />,
          brows: (
            <g transform="translate(0, -5)">
              <path d="M-30,-25 Q-20,-28 -10,-25" stroke="#4338ca" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
              <path d="M10,-25 Q20,-28 30,-25" stroke="#4338ca" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
            </g>
          )
        };
    }
  };

  const exp = getExpression();

  return (
    <div className="relative group cursor-pointer w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] transition-all duration-500 ease-in-out" onClick={handleInteraction}>
      <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible drop-shadow-2xl">
        <defs>
          <radialGradient id="chibiSkin" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8f3" />
            <stop offset="100%" stopColor="#ffeadb" />
          </radialGradient>
          <linearGradient id="chibiHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="chibiHairHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="chibiIrisGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="60%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </radialGradient>
          <linearGradient id="chibiMoon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
          <clipPath id="chibiEyeClip">
            <path d="M-22,-5 Q0,-22 22,-5 Q22,15 0,22 Q-22,15 -22,-5 Z" />
          </clipPath>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <style>
            {`
               @keyframes float-luna {
                 0%, 100% { transform: translateY(0px); }
                 50% { transform: translateY(-10px); }
               }
               .animate-float-luna { animation: float-luna 6s ease-in-out infinite; }
             `}
          </style>
        </defs>

        <g className="animate-float-luna">
          
          {/* 1. MOON BACKGROUND */}
          <path d="M120,20 A100,100 0 1,1 120,220 A80,80 0 1,0 120,20 Z" fill="url(#chibiMoon)" filter="url(#glow)" transform="rotate(-15 120 120)" opacity="0.8" />

          {/* 2. CHIBI HAIR BACK */}
          <path 
            d="M50,100 C10,160 30,240 120,240 C210,240 230,160 190,100" 
            fill="url(#chibiHair)" 
          />

          {/* 3. TINY BODY */}
          <path d="M90,180 Q120,170 150,180 L160,235 L80,235 Z" fill="#1e1b4b" />
          <path d="M100,180 Q120,195 140,180" fill="white" opacity="0.3" />

          {/* 4. CHIBI HEAD */}
          <path d="M110,170 L110,185 L130,185 L130,170" fill="url(#chibiSkin)" />
          <ellipse cx="120" cy="120" rx="65" ry="60" fill="url(#chibiSkin)" />
          
          <circle cx="85" cy="145" r="12" fill="#fda4af" opacity="0.4" filter="url(#glow)" />
          <circle cx="155" cy="145" r="12" fill="#fda4af" opacity="0.4" filter="url(#glow)" />

          {/* 5. FACE FEATURES */}
          <g transform="translate(120, 130)">
            <g transform="translate(-32, -15) scale(0.9)">{exp.leftEye}</g>
            <g transform="translate(32, -15) scale(0.9)">{exp.rightEye}</g>
            <g transform="translate(0, 0)">{exp.mouth}</g>
            <g transform="translate(0, -10)">{exp.brows}</g>
            {exp.extra}
          </g>
          {exp.tear && <g transform="translate(120, 130)">{exp.tear}</g>}

          {/* 6. CHIBI BANGS */}
          <path 
            d="M55,120 C55,50 120,30 185,120 C185,50 120,30 55,120 Z" 
            fill="url(#chibiHair)" 
          />
          <path d="M80,75 Q120,55 160,75" stroke="url(#chibiHairHighlight)" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />
          
          {/* 7. TINY HAND & FEATHER (Only if awake) */}
          {!isSleeping && (
            <g transform="translate(20, 35)">
              <circle cx="140" cy="170" r="10" fill="url(#chibiSkin)" />
              <path 
                d="M140,170 Q170,120 200,80 Q180,95 175,125 Q165,155 140,170" 
                fill="white" 
                filter="url(#glow)" 
                className="origin-[140px_170px] animate-[bounce_3s_infinite]" 
              />
              <path d="M140,170 L142,178" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          )}

        </g>
      </svg>
      
      <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <span className="bg-indigo-900/90 text-white text-[12px] px-5 py-2 rounded-full uppercase tracking-[0.2em] font-black backdrop-blur-md shadow-2xl border border-indigo-400/30">
          {isSleeping ? "Wake Her Up" : "Inspiration Mode"}
        </span>
      </div>
    </div>
  );
};

export default LunaMascot;