
import React, { useEffect, useState } from 'react';

interface NavigationProps {
  onHome: () => void;
  onFinalQuiz: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onHome, onFinalQuiz }) => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledValue = (winScroll / height) * 100;
      setScrolled(scrolledValue);
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolledValue + "%";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[80] px-8 py-6 flex justify-between items-center glass border-b-2 border-slate-200">
      <div 
        className="text-4xl font-serif-elegant font-black cursor-pointer tracking-tighter text-black"
        onClick={onHome}
      >
        Litmania<span className="text-indigo-600">.</span>
      </div>
      <div className="flex gap-12 items-center font-black text-black tracking-widest text-sm uppercase">
        <button onClick={onHome} className="hover:text-indigo-600 transition-colors hidden sm:block">The Library</button>
        <button onClick={onFinalQuiz} className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-black transition-all shadow-2xl shadow-indigo-200 active:scale-95 text-xs sm:text-sm">
          Grand Finale
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
