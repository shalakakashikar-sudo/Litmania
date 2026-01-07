import React, { useEffect, useState } from 'react';

export type LunaMood = 'neutral' | 'surprised' | 'sad' | 'winking' | 'thinking' | 'excited' | 'determined';

interface LunaMascotProps {
  mood: LunaMood;
  onClick: () => void;
}

const LunaMascot: React.FC<LunaMascotProps> = ({ mood, onClick }) => {
  const [isSleeping, setIsSleeping] = useState(false);

  // --- IDLE TIMER LOGIC ---
  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const resetTimer = () => {
      setIsSleeping(false);
      clearTimeout(idleTimer);
      // Set to sleep after 5 seconds of inactivity
      idleTimer = setTimeout(() => setIsSleeping(true), 5000); 
    };

    // Initialize timer
    resetTimer();

    // Reset on interactions
    window.addEventListener('click', resetTimer);
    window.addEventListener('mousemove', resetTimer);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('mousemove', resetTimer);
    };
  }, [mood]); // Reset if mood changes externally

  // Wrapper for parent click that also wakes her up immediately
  const handleInteraction = () => {
    setIsSleeping(false);
    onClick();
  };

  // --- COMPONENT: The Jewel Eye ---
  const JewelEye = ({ isLeft, isWinking, isClosed }: { isLeft: boolean, isWinking?: boolean, isClosed?: boolean }) => {
    // Closed / Sleeping Eye
    if (isClosed) {
       return (
         <path d="M-18,5 Q0,15 18,5" stroke="#5d4037" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
       );
    }
    // Winking Eye
    if (isWinking) {
      return <path d="M-15,0 Q0,10 15,0" stroke="#3f2e20" strokeWidth="3" fill="none" strokeLinecap="round" />;
    }
    // Open Eye
    return (
      <g className="animate-[blink_4s_infinite]">
        {/* Lashes */}
        <path d="M-16,-2 Q0,-12 16,-2" stroke="#3f2e20" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M16,-2 Q18,0 20,-2" stroke="#3f2e20" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>
        
        {/* Sclera & Shape Masking */}
        <g clipPath="url(#eyeClip)">
            <rect x="-20" y="-15" width="40" height="30" fill="white" />
            <circle cx="0" cy="0" r="9" fill="url(#eyeGradient)" />
            <circle cx="0" cy="0" r="4" fill="#1a120b" />
            <circle cx="0" cy="-3" r="8" fill="none" stroke="black" strokeWidth="0.5" opacity="0.2" />
        </g>
        
        {/* Highlights */}
        <circle cx="-5" cy="-5" r="3" fill="white" filter="url(#glow)" />
        <circle cx="4" cy="4" r="1.5" fill="white" opacity="0.7" />
      </g>
    );
  };

  // --- EXPRESSION LOGIC ---
  const getExpression = () => {
    // Priority: If sleeping, override everything
    if (isSleeping) {
      return {
        leftEye: <JewelEye isLeft={true} isClosed={true} />,
        rightEye: <JewelEye isLeft={false} isClosed={true} />,
        mouth: <circle cx="0" cy="15" r="2" fill="#ec4899" opacity="0.5" />, // Small 'o' snore mouth
        brows: null,
        extra: (
          <g className="animate-[float_3s_ease-in-out_infinite]">
             <text x="30" y="-10" fontSize="14" fill="#8b5cf6" fontWeight="bold" opacity="0.7">Z</text>
             <text x="40" y="-20" fontSize="10" fill="#8b5cf6" fontWeight="bold" opacity="0.5">z</text>
          </g>
        )
      };
    }

    switch (mood) {
      case 'surprised':
        return {
          leftEye: <JewelEye isLeft={true} />,
          rightEye: <JewelEye isLeft={false} />,
          mouth: <circle cx="0" cy="18" r="3" fill="#ec4899" opacity="0.6" />,
          brows: (
            <g stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.4">
               <path d="M-30,-20 Q-20,-28 -10,-20" />
               <path d="M10,-20 Q20,-28 30,-20" />
            </g>
          )
        };
      case 'sad':
        return {
          leftEye: <g transform="translate(0, 2)"><JewelEye isLeft={true} /></g>,
          rightEye: <g transform="translate(0, 2)"><JewelEye isLeft={false} /></g>,
          mouth: <path d="M-6,22 Q0,18 6,22" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.6" />,
          brows: (
             <g stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.4">
               <path d="M-30,-15 Q-20,-12 -10,-18" />
               <path d="M10,-18 Q20,-12 30,-15" />
            </g>
          ),
          tear: <circle cx="-12" cy="12" r="3" fill="#bae6fd" opacity="0.8" className="animate-bounce" />
        };
      case 'winking':
        return {
          leftEye: <JewelEye isLeft={true} />,
          rightEye: <JewelEye isLeft={false} isWinking={true} />,
          mouth: <path d="M-6,18 Q0,22 6,18" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.6" />,
          brows: null
        };
      case 'excited':
        return {
          leftEye: <JewelEye isLeft={true} />,
          rightEye: <JewelEye isLeft={false} />,
          mouth: <path d="M-6,18 Q0,24 6,18" fill="#ec4899" opacity="0.6" />,
          brows: null,
          extra: (
            <g className="animate-spin-slow origin-center">
              <path d="M-40,-10 L-35,-10 M-37.5,-12.5 L-37.5,-7.5" stroke="#fbbf24" strokeWidth="2" />
              <path d="M40,-10 L35,-10 M37.5,-12.5 L37.5,-7.5" stroke="#fbbf24" strokeWidth="2" />
            </g>
          )
        };
      case 'thinking':
        return {
          leftEye: <g transform="translate(0, -2)"><JewelEye isLeft={true} /></g>,
          rightEye: <g transform="translate(0, -2)"><JewelEye isLeft={false} /></g>,
          mouth: <path d="M-4,18 L4,18" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" opacity="0.6" />,
          brows: (
            <g stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.4">
               <path d="M-30,-15 Q-20,-18 -10,-15" />
               <path d="M10,-22 Q20,-25 30,-22" />
            </g>
          )
        };
      case 'determined':
         return {
          leftEye: <JewelEye isLeft={true} />,
          rightEye: <JewelEye isLeft={false} />,
          mouth: <path d="M-5,20 Q0,18 5,20" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />,
          brows: (
            <g stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.5">
               <path d="M-28,-15 Q-18,-10 -8,-15" />
               <path d="M8,-15 Q18,-10 28,-15" />
            </g>
          )
        };
      default: // Neutral
        return {
          leftEye: <JewelEye isLeft={true} />,
          rightEye: <JewelEye isLeft={false} />,
          mouth: <path d="M-5,18 Q0,20 5,18" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />,
          brows: (
            <g stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.3">
               <path d="M-28,-18 Q-18,-20 -8,-18" />
               <path d="M8,-18 Q18,-20 28,-18" />
            </g>
          )
        };
    }
  };

  const exp = getExpression();

  return (
    <div className="relative group cursor-pointer w-64 h-64 md:w-80 md:h-80 transition-all duration-500 ease-in-out" onClick={handleInteraction}>
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-2xl">
        <defs>
           <radialGradient id="skinGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff1e6" />
              <stop offset="100%" stopColor="#f3d0b9" />
           </radialGradient>
           <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5d4037" />
              <stop offset="50%" stopColor="#795548" />
              <stop offset="100%" stopColor="#8d6e63" />
           </linearGradient>
           <linearGradient id="hairShine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
           </linearGradient>
           <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="20%" stopColor="#a7f3d0" /> 
              <stop offset="70%" stopColor="#059669" /> 
              <stop offset="100%" stopColor="#064e3b" /> 
           </radialGradient>
           <linearGradient id="moonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fefce8" />
              <stop offset="100%" stopColor="#fde047" />
           </linearGradient>
           <clipPath id="eyeClip">
              <path d="M-15,0 Q0,-12 15,0 Q15,10 0,12 Q-15,10 -15,0 Z" />
           </clipPath>
           <filter id="glow">
             <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
             <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
           </filter>
           <filter id="softBlur">
             <feGaussianBlur stdDeviation="3" />
           </filter>
        </defs>

        {/* --- ANIMATION GROUP: BREATHING --- */}
        {/* If sleeping, the animation is slower (duration 8s vs 6s) */}
        <g className={isSleeping ? "animate-[float_8s_ease-in-out_infinite]" : "animate-[float_6s_ease-in-out_infinite]"}>

          {/* 1. MOON BACKGROUND */}
          <path d="M100,10 A90,90 0 1,1 100,190 A70,70 0 1,0 100,10 Z" fill="url(#moonGradient)" filter="url(#glow)" transform="rotate(-15 100 100)" opacity="0.9" />

          {/* 2. BACK HAIR (Updated to be Fuller/Wider) */}
          <path 
            d="M30,80 C10,130 0,200 60,230 C120,250 180,240 220,200 C240,150 220,100 170,80" 
            fill="url(#hairGradient)" 
          />

          {/* 3. BODY (Simple Dress) */}
          <path d="M60,160 Q100,150 140,160 L150,220 L50,220 Z" fill="#312e81" />
          <path d="M80,160 Q100,170 120,160" fill="white" opacity="0.2" />

          {/* 4. NECK & FACE */}
          <path d="M85,150 L85,160 L115,160 L115,150" fill="url(#skinGradient)" />
          <ellipse cx="100" cy="110" rx="45" ry="50" fill="url(#skinGradient)" />
          
          <ellipse cx="70" cy="125" rx="10" ry="6" fill="#f472b6" opacity="0.3" filter="url(#softBlur)" />
          <ellipse cx="130" cy="125" rx="10" ry="6" fill="#f472b6" opacity="0.3" filter="url(#softBlur)" />

          {/* 5. FEATURES GROUP */}
          <g transform="translate(100, 115)">
            <g transform="translate(-22, -8)">{exp.leftEye}</g>
            <g transform="translate(22, -8)">{exp.rightEye}</g>
            <g transform="translate(0, 5)">{exp.mouth}</g>
            <g transform="translate(0, -5)">{exp.brows}</g>
            {exp.extra}
            <circle cx="0" cy="0" r="1" fill="#d7ccc8" />
          </g>
          {exp.tear && <g transform="translate(100, 115)">{exp.tear}</g>}

          {/* 6. FRONT HAIR (BANGS) - Updated to be fuller and more framing */}
          <path 
            d="M50,100 C50,40 100,30 150,100 C150,40 100,30 50,100 Z" 
            fill="url(#hairGradient)" 
          />
          {/* Side Strands (Wider) */}
          <path d="M52,90 Q40,150 60,190" stroke="url(#hairGradient)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M148,90 Q160,150 140,190" stroke="url(#hairGradient)" strokeWidth="14" fill="none" strokeLinecap="round" />
          
          {/* Top Shine */}
          <path d="M70,60 Q100,50 130,60" stroke="url(#hairShine)" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#glow)" />

          {/* 7. HAND & FEATHER (Only visible if awake) */}
          {!isSleeping && (
            <g transform="translate(0, 30)">
              <circle cx="135" cy="160" r="9" fill="url(#skinGradient)" stroke="#f3d0b9" strokeWidth="1"/>
              <path 
                d="M135,160 Q155,120 175,90 Q165,100 160,120 Q150,140 135,160" 
                fill="white" 
                filter="url(#glow)" 
                className="origin-[135px_160px] animate-[bounce_3s_infinite]" 
              />
              <path d="M135,160 L137,165" stroke="#333" strokeWidth="1.5" />
            </g>
          )}

        </g> 
      </svg>
      
      {/* Mood Tooltip (Changes text if sleeping) */}
      <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="bg-indigo-900/80 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md shadow-lg">
          {isSleeping ? "Wake Up" : "Change Mood"}
        </span>
      </div>
    </div>
  );
};

export default LunaMascot;