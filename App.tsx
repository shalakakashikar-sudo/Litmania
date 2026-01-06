import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LITERARY_DEVICES } from './constants';
import { LiteraryDevice, Category } from './types';
import Navigation from './components/Navigation';
import DeviceCard from './components/DeviceCard';
import InfographicModal from './components/InfographicModal';
import Quiz from './components/Quiz';

type LunaMood = 'neutral' | 'surprised' | 'sad' | 'winking';

// --- THE NEW HARDCODED MASCOT COMPONENT ---
const LunaMascot: React.FC<{ mood: LunaMood; onClick: () => void }> = ({ mood, onClick }) => {
  // SVG Paths for different expression parts
  const expressions = {
    eyes: {
      neutral: (
        <g fill="#4F46E5">
          <circle cx="75" cy="95" r="8" />
          <circle cx="125" cy="95" r="8" />
          {/* Sparkles */}
          <circle cx="78" cy="92" r="3" fill="white" />
          <circle cx="128" cy="92" r="3" fill="white" />
        </g>
      ),
      surprised: (
        <g fill="#4F46E5">
          <circle cx="75" cy="95" r="10" />
          <circle cx="125" cy="95" r="10" />
          <circle cx="78" cy="92" r="4" fill="white" />
          <circle cx="128" cy="92" r="4" fill="white" />
        </g>
      ),
      sad: (
        <g fill="#4F46E5">
          <path d="M65 100 Q75 90 85 100" stroke="#4F46E5" strokeWidth="3" fill="none" />
          <path d="M115 100 Q125 90 135 100" stroke="#4F46E5" strokeWidth="3" fill="none" />
          {/* Tear */}
          <circle cx="65" cy="110" r="3" fill="#60A5FA" opacity="0.8" />
        </g>
      ),
      winking: (
        <g>
           {/* Left Eye Open */}
          <circle cx="75" cy="95" r="8" fill="#4F46E5" />
          <circle cx="78" cy="92" r="3" fill="white" />
          {/* Right Eye Wink */}
          <path d="M115 95 Q125 105 135 95" stroke="#4F46E5" strokeWidth="4" fill="none" />
        </g>
      )
    },
    mouth: {
      neutral: <path d="M90 125 Q100 130 110 125" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" fill="none" />,
      surprised: <circle cx="100" cy="130" r="6" stroke="#4F46E5" strokeWidth="3" fill="none" />,
      sad: <path d="M90 135 Q100 125 110 135" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" fill="none" />,
      winking: <path d="M90 125 Q100 135 110 125" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" fill="none" />
    }
  };

  return (
    <div className="relative group cursor-pointer w-64 h-64 md:w-80 md:h-80 xl:w-[450px] xl:h-[450px]" onClick={onClick}>
      {/* Container for the SVG */}
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <defs>
          <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Crescent Moon Background */}
        <path 
          d="M100,20 A80,80 0 1,1 100,180 A60,60 0 1,0 100,20 Z" 
          fill="url(#moonGradient)" 
          className="animate-[pulse_4s_ease-in-out_infinite]"
        />

        {/* Back Hair (Flowing) */}
        <path 
          d="M60,80 Q40,120 30,160 Q70,180 100,160 Q130,180 170,160 Q160,120 140,80" 
          fill="url(#hairGradient)" 
        />

        {/* Face Shape */}
        <ellipse cx="100" cy="100" rx="45" ry="50" fill="#FFE4E6" />
        
        {/* Bangs / Front Hair */}
        <path 
          d="M55,100 Q50,60 100,50 Q150,60 145,100 Q140,70 100,75 Q60,70 55,100" 
          fill="url(#hairGradient)" 
        />

        {/* Cheeks (Blush) */}
        <ellipse cx="70" cy="110" rx="6" ry="3" fill="#F472B6" opacity="0.4" />
        <ellipse cx="130" cy="110" rx="6" ry="3" fill="#F472B6" opacity="0.4" />

        {/* Dynamic Expressions */}
        {expressions.eyes[mood]}
        {expressions.mouth[mood]}

        {/* Floating Stars Decoration */}
        <g className="animate-[bounce_3s_infinite]" style={{ transformOrigin: 'center' }}>
           <path d="M160 40 L162 45 L167 45 L163 48 L164 53 L160 50 L156 53 L157 48 L153 45 L158 45 Z" fill="#FCD34D" />
        </g>
        <g className="animate-[bounce_4s_infinite]" style={{ transformOrigin: 'center', animationDelay: '1s' }}>
           <path d="M40 150 L42 155 L47 155 L43 158 L44 163 L40 160 L36 163 L37 158 L33 155 L38 155 Z" fill="#FCD34D" />
        </g>

      </svg>

      {/* Hover Text */}
      <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="bg-black/80 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">
          Change Mood
        </span>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<LiteraryDevice | null>(null);
  const [showFinalQuiz, setShowFinalQuiz] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Mascot state
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
    LITERARY_DEVICES
      .filter(d => d.quiz && d.quiz.length > 0)
      .flatMap(d => d.quiz), 
  []);

  const navigateDevice = (direction: 'next' | 'prev') => {
    if (!selectedDevice) return;
    const currentIndex = filteredDevices.findIndex(d => d.id === selectedDevice.id);
    if (currentIndex === -1) return;

    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredDevices.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredDevices.length) % filteredDevices.length;
    }
    setSelectedDevice(filteredDevices[nextIndex]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = document.querySelectorAll('.reveal-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredDevices, showFinalQuiz]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
        const searchBox = searchInputRef.current?.parentElement;
        if (searchBox) {
            window.scrollTo({ 
              top: searchBox.getBoundingClientRect().top + window.scrollY - 150, 
              behavior: 'smooth' 
            });
        }
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
    if (libraryRef.current) {
      window.scrollTo({
        top: libraryRef.current.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (searchQuery && window.scrollY < 400) {
      scrollToLibrary();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (showFinalQuiz) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showFinalQuiz]);

  // Mascot logic for handling click-to-change mood
  const cycleMood = () => {
    const moods: LunaMood[] = ['neutral', 'surprised', 'sad', 'winking'];
    const currentIndex = moods.indexOf(lunaMood);
    const nextMood = moods[(currentIndex + 1) % moods.length];
    setLunaMood(nextMood);
  };

  const moodConfig = {
    neutral: {
      quote: "In the moonlit halls of the mind, every device is a master key.",
      subtitle: "The Librarian of Dreams"
    },
    surprised: {
      quote: "Aha! A hidden layer of meaning revealed itself!",
      subtitle: "The Astonished Sage"
    },
    sad: {
      quote: "Even tragedy is beautiful when carved with the right words.",
      subtitle: "The Melancholic Poet"
    },
    winking: {
      quote: "Every metaphor is a secret shared between us.",
      subtitle: "The Playful Archivist"
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbfb] text-black pb-64 relative selection:bg-indigo-200">
      <Navigation onHome={goHome} onFinalQuiz={() => setShowFinalQuiz(true)} />
      
      {!showFinalQuiz && (
        <header className="relative pt-64 pb-24 px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[140px] opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 -z-10 w-[700px] h-[700px] bg-rose-50 rounded-full blur-[120px] opacity-60"></div>
          
          <div className="text-center flex flex-col items-center">
            
            {/* The Litmania Muse: Luna (SVG Version) */}
            <div className="relative mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
               <div className="absolute inset-[-40px] bg-gradient-to-tr from-indigo-100 via-rose-100 to-amber-100 rounded-full blur-[60px] opacity-60 animate-pulse"></div>
               
               {/* Replaced Image with SVG Component */}
               <LunaMascot mood={lunaMood} onClick={cycleMood} />

                {/* Luna's Nameplate */}
                <div className="relative -mt-10 flex flex-col items-center gap-3 z-10">
                  <div className="bg-black text-white px-12 py-4 rounded-full font-black tracking-[0.5em] text-xs md:text-sm shadow-[0_20px_40px_rgba(0,0,0,0.3)] whitespace-nowrap uppercase transform hover:scale-110 transition-transform cursor-pointer" onClick={cycleMood}>
                    LUNA
                  </div>
                  <div className="text-[9px] md:text-[11px] font-black tracking-[0.3em] text-slate-500 uppercase whitespace-nowrap bg-white/90 backdrop-blur-md px-6 py-2 rounded-xl border border-slate-100 shadow-sm transition-all duration-500">
                    {moodConfig[lunaMood].subtitle}
                  </div>
                </div>
            </div>

            <p className="max-w-3xl mx-auto text-2xl md:text-4xl font-serif-elegant italic text-slate-900 leading-tight mb-20 mt-8 font-black tracking-tight drop-shadow-sm h-24 flex items-center justify-center">
              "{moodConfig[lunaMood].quote}"
            </p>
            
            <div className="max-w-3xl mx-auto mb-20 w-full relative group">
              <input 
                ref={searchInputRef}
                type="text"
                placeholder="Consult the library... (Press '/' to search)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-8 rounded-[3rem] bg-white border-4 border-slate-200 shadow-2xl focus:ring-8 focus:ring-indigo-100 transition-all outline-none text-2xl font-black group-hover:border-black"
              />
              <div className="absolute right-10 top-1/2 -translate-y-1/2 flex items-center gap-6">
                {searchQuery && (
                   <button onClick={() => setSearchQuery('')} className="p-3 text-slate-400 hover:text-black transition-colors">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
                )}
                <div className="text-black">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-24 px-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat as Category | 'All');
                    setTimeout(scrollToLibrary, 50);
                  }}
                  className={`px-8 py-4 sm:px-10 sm:py-5 rounded-full text-xs sm:text-sm font-black tracking-[0.2em] transition-all duration-300 border-4 ${
                    activeCategory === cat 
                      ? 'bg-black text-white border-black shadow-2xl scale-110' 
                      : 'bg-white text-black border-slate-200 hover:border-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
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
                  <DeviceCard 
                    device={device} 
                    onClick={(d) => setSelectedDevice(d)} 
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full py-64 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="text-[12rem] mb-16 opacity-40">🌙</div>
                <h3 className="text-5xl sm:text-7xl font-serif-elegant text-black mb-8 italic font-black">Luna cannot find that tome.</h3>
                <p className="text-2xl sm:text-4xl text-slate-800 font-classic font-black">Try a different term or clear your filters.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                  className="mt-16 text-indigo-800 font-black text-2xl sm:text-3xl hover:underline decoration-4 underline-offset-8"
                >
                  Restore the library
                </button>
              </div>
            )}
          </div>
        </main>
      ) : (
        <main className="pt-64 px-8 reveal-card visible">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="flex justify-start">
              <button 
                onClick={goHome}
                className="flex items-center gap-6 px-10 py-5 bg-black text-white rounded-[2.5rem] hover:scale-105 transition-all font-black text-xl shadow-2xl"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Return to Luna's Sanctuary
              </button>
            </div>
            <div className="glass rounded-[4rem] sm:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] sm:border-[12px] border-slate-50">
              <Quiz 
                title="The Grand Archivist's Mastery Quiz"
                questions={allQuestions}
                onComplete={(score) => {
                  goHome();
                }}
              />
            </div>
          </div>
        </main>
      )}

      {selectedDevice && (
        <InfographicModal 
          device={selectedDevice} 
          onClose={() => setSelectedDevice(null)} 
          onPrev={() => navigateDevice('prev')}
          onNext={() => navigateDevice('next')}
        />
      )}

      <div className="fixed top-1/4 left-10 w-20 h-20 rounded-full bg-indigo-400 opacity-20 animated-float pointer-events-none"></div>
      <div className="fixed top-1/2 right-20 w-32 h-32 rounded-full bg-rose-400 opacity-15 animated-float pointer-events-none" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-20 left-1/3 w-24 h-24 rounded-full bg-amber-400 opacity-15 animated-float pointer-events-none" style={{animationDelay: '2s'}}></div>

      {isScrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-32 sm:bottom-40 right-8 sm:right-16 z-[90] p-6 sm:p-8 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 animate-in fade-in slide-in-from-bottom-12"
        >
          <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      )}

      {/* Creator Credits Section */}
      <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] px-4 py-2 glass border-2 border-indigo-100 rounded-2xl shadow-xl group hover:bg-black transition-all pointer-events-auto scale-90">
        <span className="text-[7px] uppercase tracking-[0.4em] text-indigo-800 font-black block leading-none mb-1 group-hover:text-white transition-colors">Created by</span>
        <span className="text-xs font-serif-elegant font-black text-black group-hover:text-white leading-none block">Shalaka Kashikar</span>
      </div>

      <footer className="mt-64 border-t-8 border-slate-100 pt-48 pb-48 px-8 max-w-7xl mx-auto text-center">
        <div className="text-7xl sm:text-9xl font-serif-elegant font-black text-slate-100 mb-12">Litmania</div>
        <div className="text-slate-400 text-xs sm:text-sm tracking-[0.8em] uppercase mb-12 font-black">The Sanctuary of Literary Virtuosos</div>
      </footer>
    </div>
  );
};

export default App;