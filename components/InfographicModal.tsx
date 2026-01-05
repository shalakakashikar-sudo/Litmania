
import React, { useState, useEffect, useRef } from 'react';
import { LiteraryDevice } from '../types';
import Quiz from './Quiz';

interface InfographicModalProps {
  device: LiteraryDevice;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const InfographicModal: React.FC<InfographicModalProps> = ({ device, onClose, onNext, onPrev }) => {
  const [view, setView] = useState<'info' | 'quiz'>('info');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // When device or view changes, reset the scroll to top
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [device.id, view]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 backdrop-blur-3xl flex items-start justify-center py-4 lg:py-8 px-4 sm:px-6">
      <div className="bg-white w-full max-w-7xl rounded-[3rem] lg:rounded-[4rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] overflow-hidden flex flex-col lg:flex-row h-[95vh] lg:h-[90vh] animate-in zoom-in-95 duration-500 relative border-4 border-slate-100/30">
        
        {/* Navigation Buttons (Floating Desktop) */}
        <div className="absolute bottom-10 right-10 z-[120] hidden lg:flex gap-4">
          <button 
            onClick={onPrev}
            className="p-4 bg-white/90 text-black hover:bg-black hover:text-white transition-all rounded-full shadow-2xl active:scale-90 border-2 border-slate-100"
            aria-label="Previous Device"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={onNext}
            className="p-4 bg-white/90 text-black hover:bg-black hover:text-white transition-all rounded-full shadow-2xl active:scale-90 border-2 border-slate-100"
            aria-label="Next Device"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[120] p-4 bg-black/90 text-white hover:bg-black hover:scale-110 transition-all rounded-full shadow-2xl active:scale-90"
          aria-label="Close"
        >
          <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side Visuals */}
        <div className="hidden lg:flex lg:w-5/12 relative h-full self-stretch overflow-hidden flex-col">
          <img src={device.imageUrl} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30s] hover:scale-125" alt={device.name} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-indigo-950/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 p-12 lg:p-16 flex flex-col justify-end text-white">
            <div className="mb-4 text-indigo-400 uppercase tracking-[0.6em] text-xs font-black drop-shadow-md">{device.category}</div>
            
            <h2 className="text-4xl xl:text-6xl 2xl:text-7xl font-serif-elegant mb-6 leading-[0.95] tracking-tighter drop-shadow-2xl overflow-wrap-anywhere break-words">
              {device.name}
            </h2>
            
            <div className="text-xl lg:text-2xl font-classic italic opacity-90 mb-8 font-bold">/ {device.pronunciation} /</div>
            <div className="h-1.5 w-24 bg-indigo-500 mb-10 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.8)]"></div>
            <p className="text-2xl lg:text-3xl font-classic leading-snug italic text-white font-black border-l-8 border-indigo-500 pl-8 drop-shadow-lg">
              "{device.shortDefinition}"
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-7/12 bg-slate-50 flex flex-col overflow-hidden h-full relative">
          
          <div className="px-8 pt-8 lg:px-16 lg:pt-12 pb-6 bg-white/95 backdrop-blur-md border-b-2 border-slate-100 shrink-0 z-50">
             <div className="flex gap-4 sm:gap-8">
               <button 
                onClick={() => setView('info')}
                className={`px-8 py-3 lg:px-10 lg:py-4 rounded-full text-[10px] lg:text-sm font-black tracking-widest transition-all ${view === 'info' ? 'bg-black text-white shadow-2xl scale-105' : 'text-slate-400 hover:text-black hover:bg-slate-100'}`}
              >
                INFOGRAPHIC
              </button>
              <button 
                onClick={() => setView('quiz')}
                className={`px-8 py-3 lg:px-10 lg:py-4 rounded-full text-[10px] lg:text-sm font-black tracking-widest transition-all ${view === 'quiz' ? 'bg-black text-white shadow-2xl scale-105' : 'text-slate-400 hover:text-black hover:bg-slate-100'}`}
              >
                MASTERY TEST
              </button>
             </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto custom-scrollbar px-8 lg:px-16 py-10 lg:py-16 scroll-smooth"
          >
            {view === 'info' ? (
              <div key={device.id} className="space-y-16 lg:space-y-24 animate-in fade-in slide-in-from-right-12 duration-700">
                
                {/* Mobile Specific Header */}
                <div className="lg:hidden mb-12">
                   <h2 className="text-5xl font-serif-elegant font-black text-black mb-2 leading-none break-words">{device.name}</h2>
                   <p className="text-xl font-classic italic text-indigo-600 font-bold mb-6">/ {device.pronunciation} /</p>
                   <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border-4 border-white">
                     <img src={device.imageUrl} className="w-full h-full object-cover" alt={device.name} />
                   </div>
                </div>

                <section className="space-y-10">
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-black tracking-[0.5em] text-indigo-600 uppercase">In-Depth Logic</span>
                    <div className="h-0.5 flex-1 bg-slate-200"></div>
                  </div>
                  <p className="text-3xl lg:text-5xl text-black leading-tight font-serif-elegant font-black">
                    {device.longDefinition}
                  </p>
                </section>

                <section className="space-y-12">
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-black tracking-[0.5em] text-indigo-600 uppercase">Analysis of Usage</span>
                    <div className="h-0.5 flex-1 bg-slate-200"></div>
                  </div>
                  <div className="grid grid-cols-1 gap-10">
                    {device.examples.map((ex, idx) => (
                      <div key={idx} className="group flex flex-col p-8 lg:p-10 bg-white rounded-[2.5rem] lg:rounded-[3.5rem] border-4 border-slate-100 shadow-xl hover:border-black transition-all duration-500 hover:-translate-y-2">
                        <div className="flex justify-between items-start mb-6">
                          <div className="text-indigo-600">
                            <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56888 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56888 8 8.0166 8H5.0166C3.91203 8 3.0166 7.10457 3.0166 6V3L10.0166 3V15C10.0166 18.3137 7.3303 21 4.0166 21H3.0166Z"/>
                            </svg>
                          </div>
                          <span className="px-6 py-2 bg-indigo-50 text-[10px] font-black text-indigo-600 rounded-full uppercase tracking-widest border border-indigo-100">{ex.type}</span>
                        </div>
                        
                        <p className="text-2xl lg:text-3xl text-black font-classic leading-snug italic font-black mb-6">"{ex.text}"</p>
                        
                        {ex.explanation && (
                          <div className="bg-slate-50/80 p-6 lg:p-8 rounded-3xl border-2 border-slate-100 mb-6">
                            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest block mb-3">Literary Breakdown</span>
                            <p className="text-base lg:text-lg text-slate-700 font-bold leading-relaxed">{ex.explanation}</p>
                          </div>
                        )}

                        <div className="flex items-center justify-start border-t-2 border-slate-50 pt-6">
                           <span className="text-xs lg:text-sm font-black text-indigo-900/40 uppercase tracking-[0.2em]">Source: {ex.source}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t-4 border-slate-100 pb-16">
                  <section className="space-y-10">
                    <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em] flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-rose-500 shadow-xl"></div> Deeper Nuances
                    </h4>
                    <div className="space-y-8">
                      {device.nuances.map((n, i) => (
                        <div key={i} className="flex gap-6 items-start bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-md hover:shadow-2xl transition-all group">
                          <span className="text-indigo-300 font-black text-3xl leading-none group-hover:text-indigo-600 transition-colors">0{i+1}</span>
                          <p className="text-black text-base lg:text-lg font-bold leading-tight text-slate-800">{n}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-10">
                    <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em] flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-xl"></div> Pro Strategy
                    </h4>
                    <div className="space-y-8">
                      {device.proTips.map((p, i) => (
                        <div key={i} className="bg-black p-8 lg:p-10 rounded-[3rem] border-4 border-indigo-400/20 shadow-2xl group hover:-translate-y-1 transition-all">
                          <p className="text-white text-base lg:text-xl font-bold italic leading-tight opacity-90 group-hover:opacity-100">
                            {p}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Mobile Navigation Footer */}
                <div className="flex lg:hidden justify-between items-center pt-8 border-t-2 border-slate-100">
                  <button onClick={onPrev} className="flex items-center gap-2 font-black text-sm text-slate-500 hover:text-black transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    PREVIOUS
                  </button>
                  <button onClick={onNext} className="flex items-center gap-2 font-black text-sm text-slate-500 hover:text-black transition-colors">
                    NEXT
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

              </div>
            ) : (
              <div key={`quiz-${device.id}`} className="animate-in fade-in duration-500 pb-24 max-w-4xl mx-auto">
                 <Quiz 
                  title={`Final Assessment: ${device.name}`}
                  questions={device.quiz}
                  onComplete={() => setView('info')}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicModal;
