
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LITERARY_DEVICES } from './constants';
import { LiteraryDevice, Category } from './types';
import Navigation from './components/Navigation';
import DeviceCard from './components/DeviceCard';
import InfographicModal from './components/InfographicModal';
import Quiz from './components/Quiz';
import LunaMascot, { LunaMood } from './components/LunaMascot';

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

  const allQuestions = useMemo(() => {
    const questions = LITERARY_DEVICES.filter(d => d.quiz && d.quiz.length > 0).flatMap(d => d.quiz);
    return [...questions].sort(() => Math.random() - 0.5);
  }, [showFinalQuiz]);

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
        window.scrollTo({ top: (searchInputRef.current?.parentElement?.getBoundingClientRect().top || 0) + window.scrollY - 150, behavior: 'smooth' });
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

  const cycleMood = () => {
    const moods: LunaMood[] = ['neutral', 'surprised', 'sad', 'winking', 'thinking', 'excited', 'determined'];
    setLunaMood(moods[(moods.indexOf(lunaMood) + 1) % moods.length]);
  };

  const moodConfig = {
    neutral: { quote: "Every device is a master key to the mind.", subtitle: "Lumi the Guardian" },
    surprised: { quote: "By the stars! A hidden meaning revealed!", subtitle: "The Astonished Sage" },
    sad: { quote: "Even tragedy is beautiful when carved in ink.", subtitle: "The Melancholic Poet" },
    winking: { quote: "A metaphor is just a secret shared between us.", subtitle: "The Playful Archivist" },
    thinking: { quote: "Is this irony... or merely a paradox?", subtitle: "The Pondering Scholar" },
    excited: { quote: "This imagery is absolutely electric!", subtitle: "The Inspired Muse" },
    determined: { quote: "We shall decipher every symbol on this page.", subtitle: "The Dedicated Guide" }
  };

  return (
    <div className="min-h-screen bg-[#fdfbfb] text-black pb-64 relative selection:bg-indigo-200">
      <Navigation onHome={goHome} onFinalQuiz={() => setShowFinalQuiz(true)} />
      
      {!showFinalQuiz && (
        <header className="relative pt-32 lg:pt-40 pb-16 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[140px] opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 -z-10 w-[700px] h-[700px] bg-rose-50 rounded-full blur-[120px] opacity-60"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
               <h1 className="text-4xl lg:text-6xl font-serif-elegant font-black italic text-slate-900 leading-[1.1] mb-8 drop-shadow-sm min-h-[140px]">
                  "{moodConfig[lunaMood].quote}"
               </h1>
              
               <div className="w-full relative group mb-10 max-w-2xl">
                  <input 
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search literary devices... (press /)"
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
                      onClick={() => { setActiveCategory(cat as Category | 'All'); }}
                      className={`px-6 py-2 rounded-full text-[10px] font-black tracking-wider transition-all duration-300 border-2 ${
                        activeCategory === cat ? 'bg-black text-white border-black shadow-lg transform scale-105' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
               </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000">
               <LunaMascot 
                mood={lunaMood} 
                onClick={cycleMood} 
               />
               <div className="mt-6">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] px-4 py-1.5 bg-indigo-50 rounded-full border border-indigo-100 shadow-sm whitespace-nowrap">
                    {moodConfig[lunaMood].subtitle}
                  </span>
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
                <h3 className="text-2xl font-bold">No tomes found.</h3>
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
              <Quiz title="The Randomized Grand Finale" questions={allQuestions} onComplete={() => goHome()} />
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
