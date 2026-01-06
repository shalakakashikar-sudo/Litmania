import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LITERARY_DEVICES } from './constants';
import { LiteraryDevice, Category } from './types';
import Navigation from './components/Navigation';
import DeviceCard from './components/DeviceCard';
import InfographicModal from './components/InfographicModal';
import Quiz from './components/Quiz';

type LunaMood = 'neutral' | 'surprised' | 'sad' | 'winking';

// --- THE NEW "VERY VERY KAWAII" LUNA MASCOT ---
const LunaMascot: React.FC<{ mood: LunaMood; onClick: () => void }> = ({ mood, onClick }) => {
  
  // MEGA KAWAII EYES BASE
  const eyeBase = (
    <g>
      {/* Giant Sclera */}
      <circle cx="85" cy="115" r="20" fill="white" stroke="#312e81" strokeWidth="0.5" />
      {/* Giant Iris Base */}
      <circle cx="85" cy="115" r="17" fill="url(#eyeGradient)" />
      {/* Giant Pupil */}
      <circle cx="85" cy="118" r="8" fill="#1e1b4b" />
      {/* KAWAII SPARKLES (Extra shiny!) */}
      <ellipse cx="76" cy="105" rx="6" ry="4" fill="white" filter="url(#glow)" transform="rotate(-20 76 105)" /> {/* Main giant sparkle */}
      <circle cx="94" cy="122" r="3.5" fill="white" opacity="0.9" /> {/* Secondary sparkle */}
      <circle cx="82" cy="128" r="2" fill="white" opacity="0.8" /> {/* Tiny bottom sparkle */}
    </g>
  );

  const expressions = {
    eyes: {
      neutral: (
        <g>
          <g transform="translate(-10,0)">{eyeBase}</g>
          <g transform="translate(70,0)">{eyeBase}</g>
        </g>
      ),
      surprised: (
        <g>
           <g transform="translate(-10,-4)">{eyeBase}</g>
           <g transform="translate(70,-4)">{eyeBase}</g>
           {/* Tiny high brows */}
           <path d="M70 90 Q80 85 90 90" stroke="#4338ca" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
           <path d="M150 90 Q160 85 170 90" stroke="#4338ca" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
        </g>
      ),
      sad: (
        <g>
          <g transform="translate(-10,4)">{eyeBase}</g>
          <g transform="translate(70,4)">{eyeBase}</g>
          {/* Sad eyelid overlay */}
          <path d="M60 105 Q85 125 110 105" fill="#ffe4e6" />
          <path d="M140 105 Q165 125 190 105" fill="#ffe4e6" />
          {/* Big cartoon tears */}
          <circle cx="75" cy="140" r="4" fill="#bae6fd" opacity="0.9" className="animate-bounce"/>
          <circle cx="165" cy="140" r="3" fill="#bae6fd" opacity="0.9" className="animate-bounce" style={{animationDelay:'0.2s'}}/>
        </g>
      ),
      winking: (
        <g>
           <g transform="translate(-10,0)">{eyeBase}</g>
           {/* Kawaii Wink >_< style */}
           <path d="M150 120 L165 130 L180 120" stroke="#312e81" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )
    },
    mouth: {
      // Tiny mouths placed higher up between the giant eyes
      neutral: <path d="M115 145 Q120 148 125 145" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />,
      surprised: <circle cx="120" cy="148" r="3" stroke="#be123c" strokeWidth="2.5" fill="none" opacity="0.7" />,
      sad: <path d="M115 150 Q120 145 125 150" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />,
      winking: <path d="M115 145 Q120 142 125 148" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
    }
  };

  return (
    <div className="relative group cursor-pointer w-48 h-48 md:w-72 md:h-72 lg:w-[420px] lg:h-[420px] transition-all duration-500" onClick={onClick}>
      <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 overflow-visible">
        <defs>
          <linearGradient id="moonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
          <linearGradient id="hairGradientDeep" x1="0%" y1="0%" x2="0%" y2="100%">
             <stop offset="0%" stopColor="#1e1b4b" /> 
             <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
           <linearGradient id="hairGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#312e81" />
             <stop offset="50%" stopColor="#4338ca" />
             <stop offset="100%" stopColor="#6366f1" /> 
          </linearGradient>
          <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" /> {/* Lighter purple for cuteness */}
            <stop offset="100%" stopColor="#312e81" />
          </radialGradient>
          <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#ffffff" />
             <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
           <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
           <filter id="softHairBlur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* --- BACKGROUND MOON (Rounder and cuter) --- */}
        <path d="M120,20 A90,90 0 1,1 120,200 A70,70 0 1,0 120,20 Z" fill="url(#moonGradient)" filter="url(#glow)" transform="rotate(-15 120 120) scale(0.9)" className="animate-[pulse_4s_ease-in-out_infinite]" />

        {/* --- POOFY KAWAII HAIR --- */}
        {/* Deep Back Layer (Poofier) */}
        <path 
          d="M30,80 C-10,150 10,220 60,240 C120,260 180,260 220,240 C260,200 250,130 210,80" 
          fill="url(#hairGradientDeep)" 
          filter="url(#softHairBlur)"
          opacity="0.7"
        />
        {/* Main Body (Rounder, bouncier waves) */}
        <path 
          d="M50,60 C0,130 20,200 70,220 C120,240 160,240 200,220 C240,180 230,110 190,60" 
          fill="url(#hairGradientMain)" 
        />

        {/* --- DRESS (Tiny body) --- */}
        <path d="M80,180 Q120,170 160,180 L170,240 L70,240 Z" fill="#312e81" />

        {/* --- KAWAII HEAD & FACE (Rounder, bigger forehead, lower features) --- */}
        {/* Tiny Neck */}
        <path d="M110,170 L110,185 L130,185 L130,170" fill="#ffe4e6" />
        {/* Super Round Face Shape */}
        <ellipse cx="120" cy="125" rx="70" ry="65" fill="#ffe4e6" />
        
        {/* GIANT BLUSH CHEEKS */}
        <ellipse cx="75" cy="145" rx="12" ry="8" fill="#fda4af" opacity="0.6" filter="url(#glow)" />
        <ellipse cx="165" cy="145" rx="12" ry="8" fill="#fda4af" opacity="0.6" filter="url(#glow)" />

        {expressions.eyes[mood]}
        {expressions.mouth[mood]}

        {/* --- FRONT HAIR (Bangs hugging the round face) --- */}
        <path 
          d="M60,125 C55,50 120,40 180,125 C190,60 120,30 60,60 Z" 
          fill="url(#hairGradientMain)"
          opacity="0.95"
        />
         {/* Chunky side strands */}
        <path d="M65,120 C55,150 65,180 80,200" stroke="url(#hairGradientMain)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M175,120 C185,150 175,180 160,200" stroke="url(#hairGradientMain)" strokeWidth="10" fill="none" strokeLinecap="round" />

        {/* --- CHUBBY HAND & FEATHER --- */}
        <g transform="translate(0, 35)">
           <circle cx="150" cy="170" r="12" fill="#ffe4e6" stroke="#fb7185" strokeWidth="0.5"/>
           {/* Rounder feather */}
           <path d="M150,170 Q170,130 190,100 Q180,110 175,130 Q165,150 150,170" fill="url(#featherGradient)" filter="url(#glow)" className="origin-[150px_170px] animate-[bounce_3s_infinite]" />
        </g>
        
        {/* Extra sparkles */}
        <circle cx="190" cy="60" r="3" fill="white" className="animate-pulse" filter="url(#glow)" />
        <circle cx="50" cy="180" r="2" fill="white" className="animate-pulse" style={{animationDelay:'0.5s'}} filter="url(#glow)" />
      </svg>

      <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="bg-indigo-900/80 text-indigo-100 text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md shadow-lg border border-indigo-300/30">
          Change Mood
        </span>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<LiteraryDevice | null>(null);
  const [showFinalQuiz, setShowFinalQuiz] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lunaMood, setLunaMood] = useState<LunaMood>('neutral');

  const searchInputRef = useRef<HTMLInputElement>(null);
  const libraryRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ['All', ...Object.values(Category)];
  
  const filteredDevices = useMemo(() => {
    return LITERARY_DEVICES.filter(device => {
      const matchesCategory = activeCategory === 'All' || device.category === activeCategory;
      const matchesSearch = device.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            device.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const allQuestions = useMemo(() => 
    LITERARY_DEVICES.filter(d => d.quiz && d.quiz.length > 0).flatMap(d => d.quiz), 
  []);

  const navigateDevice = (direction: 'next' | 'prev') => {
    if (!selectedDevice) return;
    const currentIndex = filteredDevices.findIndex(d => d.id === selectedDevice.id);
    if (currentIndex === -1) return;
    let nextIndex = direction === 'next' ? (currentIndex + 1) % filteredDevices.length : (currentIndex - 1 + filteredDevices.length) % filteredDevices.length;
    setSelectedDevice(filteredDevices[nextIndex]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    const cards = document.querySelectorAll('.reveal-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredDevices, showFinalQuiz]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
        window.scrollTo({ top: searchInputRef.current?.parentElement?.getBoundingClientRect().top! + window.scrollY - 150, behavior: 'smooth' });
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const goHome = () => {
    setShowFinalQuiz(false);
    setSelectedDevice(null);
    setSearchQuery('');
    setActiveCategory('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToLibrary = () => {
    if (libraryRef.current) window.scrollTo({ top: libraryRef.current.offsetTop - 120, behavior: 'smooth' });
  };

  useEffect(() => { if (searchQuery && window.scrollY < 400) scrollToLibrary(); }, [searchQuery]);
  useEffect(() => { if (showFinalQuiz) window.scrollTo({ top: 0, behavior: 'smooth' }); }, [showFinalQuiz]);

  const cycleMood = () => {
    const moods: LunaMood[] = ['neutral', 'surprised', 'sad', 'winking'];
    setLunaMood(moods[(moods.indexOf(lunaMood) + 1) % moods.length]);
  };

  const moodConfig = {
    neutral: { quote: "Every device is a master key.", subtitle: "The Librarian of Dreams" },
    surprised: { quote: "A hidden meaning revealed!", subtitle: "The Astonished Sage" },
    sad: { quote: "Tragedy carved in words.", subtitle: "The Melancholic Poet" },
    winking: { quote: "A secret shared between us.", subtitle: "The Playful Archivist" }
  };

  return (
    <div className="min-h-screen bg-[#fdfbfb] text-black pb-64 relative selection:bg-indigo-200">
      <Navigation onHome={goHome} onFinalQuiz={() => setShowFinalQuiz(true)} />
      
      {!showFinalQuiz && (
        <header className="relative pt-28 pb-12 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[140px] opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 -z-10 w-[700px] h-[700px] bg-rose-50 rounded-full blur-[120px] opacity-60"></div>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-20">
            
            {/* LEFT SIDE: LUNA MASCOT */}
            <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-1000 flex-shrink-0 flex flex-col items-center">
               <div className="absolute inset-[-40px] bg-gradient-to-tr from-indigo-100 via-rose-100 to-amber-100 rounded-full blur-[60px] opacity-60 animate-pulse"></div>
               <LunaMascot mood={lunaMood} onClick={cycleMood} />
                <div className="relative -mt-6 flex flex-col items-center gap-2 z-10">
                  <div className="bg-black text-white px-8 py-2 rounded-full font-black tracking-[0.4em] text-[10px] md:text-xs shadow-xl uppercase transform hover:scale-110 transition-transform cursor-pointer" onClick={cycleMood}>
                    LUNA
                  </div>
                  <div className="text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                    {moodConfig[lunaMood].subtitle}
                  </div>
                </div>
            </div>

            {/* RIGHT SIDE: CONTROLS & QUOTE */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl z-10">
               <h1 className="text-4xl lg:text-6xl font-serif-elegant font-black italic text-slate-900 leading-tight mb-4 drop-shadow-sm">
                  "{moodConfig[lunaMood].quote}"
               </h1>
               
               <p className="text-slate-500 mb-8 font-medium">Click Luna to change her mood & inspiration.</p>
              
               <div className="w-full relative group mb-8">
                  <input 
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search literary devices..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-8 py-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xl focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-xl font-bold group-hover:border-indigo-300"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">
                    {searchQuery ? (
                       <button onClick={() => setSearchQuery('')} className="hover:text-black">✕</button>
                    ) : (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    )}
                  </div>
               </div>

               <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat as Category | 'All'); setTimeout(scrollToLibrary, 50); }}
                      className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 border-2 ${
                        activeCategory === cat ? 'bg-black text-white border-black shadow-lg transform scale-105' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </header>
      )}

      {!showFinalQuiz ? (
        <main ref={libraryRef} className="max-w-[1500px] mx-auto px-8 scroll-mt-24">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device) => (
                <div key={device.id} className="reveal-card">
                  <DeviceCard device={device} onClick={(d) => setSelectedDevice(d)} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center opacity-60">
                <div className="text-8xl mb-4">🌙</div>
                <h3 className="text-2xl font-bold">Luna cannot find that tome.</h3>
                <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-4 text-indigo-600 font-bold underline">Clear Filters</button>
              </div>
            )}
          </div>
        </main>
      ) : (
        <main className="pt-32 px-8 reveal-card visible">
           <div className="max-w-6xl mx-auto space-y-16">
            <button onClick={goHome} className="flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
               <span>←</span> Return to Library
            </button>
            <div className="glass rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50">
              <Quiz title="The Grand Archivist's Mastery Quiz" questions={allQuestions} onComplete={(score) => goHome()} />
            </div>
          </div>
        </main>
      )}

      {selectedDevice && (
        <InfographicModal device={selectedDevice} onClose={() => setSelectedDevice(null)} onPrev={() => navigateDevice('prev')} onNext={() => navigateDevice('next')} />
      )}

      <div className="fixed bottom-6 right-6 z-[100] px-4 py-2 glass border border-indigo-100 rounded-xl shadow-lg opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-bold text-indigo-900">Created by Shalaka Kashikar</span>
      </div>

      {isScrolled && !showFinalQuiz && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-24 right-6 z-[90] p-4 bg-black text-white rounded-full shadow-xl hover:scale-110 transition-transform">
          ↑
        </button>
      )}
    </div>
  );
};

export default App;