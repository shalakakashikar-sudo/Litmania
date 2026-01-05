
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LITERARY_DEVICES } from './constants';
import { LiteraryDevice, Category } from './types';
import Navigation from './components/Navigation';
import DeviceCard from './components/DeviceCard';
import InfographicModal from './components/InfographicModal';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<LiteraryDevice | null>(null);
  const [showFinalQuiz, setShowFinalQuiz] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Find next and previous devices in the currently filtered list
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

  // Intersection Observer for seamless revealing of cards
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
        // Seamlessly scroll to search
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

  // Auto-scroll logic when searching to keep results visible
  useEffect(() => {
    if (searchQuery && window.scrollY < 400) {
      scrollToLibrary();
    }
  }, [searchQuery]);

  // When opening final quiz, ensure we start at the top
  useEffect(() => {
    if (showFinalQuiz) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showFinalQuiz]);

  return (
    <div className="min-h-screen bg-[#fdfbfb] text-black pb-64 relative selection:bg-indigo-200">
      <Navigation onHome={goHome} onFinalQuiz={() => setShowFinalQuiz(true)} />
      
      {!showFinalQuiz && (
        <header className="relative pt-64 pb-24 px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[140px] opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 -z-10 w-[700px] h-[700px] bg-rose-50 rounded-full blur-[120px] opacity-60"></div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-serif-elegant font-black text-black mb-10 tracking-tighter animate-in slide-in-from-bottom-12 duration-1000 leading-none">
              The Art of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-rose-800">Expression.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-2xl md:text-3xl font-classic italic text-slate-900 leading-tight mb-16 font-black">
              Explore the sanctuary of words. Master the devices that transform language into vivid imagery, rhythm, and profound meaning.
            </p>
            
            <div className="max-w-3xl mx-auto mb-20 relative group">
              <input 
                ref={searchInputRef}
                type="text"
                placeholder="Search for a device... (Press '/' to focus)"
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
                    // Smooth scroll to results immediately on category change
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
                <div className="text-[12rem] mb-16 opacity-40">📖</div>
                <h3 className="text-5xl sm:text-7xl font-serif-elegant text-black mb-8 italic font-black">No devices found.</h3>
                <p className="text-2xl sm:text-4xl text-slate-800 font-classic font-black">Try a different term or clear your filters.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                  className="mt-16 text-indigo-800 font-black text-2xl sm:text-3xl hover:underline decoration-4 underline-offset-8"
                >
                  Show all devices
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
                Back to Sanctuary
              </button>
            </div>
            <div className="glass rounded-[4rem] sm:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] sm:border-[12px] border-slate-50">
              <Quiz 
                title="The Literary Grand Masterpiece Quiz"
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

      <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] px-4 py-2 glass border-2 border-indigo-100 rounded-2xl shadow-xl group hover:bg-black transition-all pointer-events-auto scale-90">
        <span className="text-[7px] uppercase tracking-[0.4em] text-indigo-800 font-black block leading-none mb-1 group-hover:text-white transition-colors">Litmania Curator</span>
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
