
import React from 'react';
import { LunaMood } from './LunaMascot';

interface MascotEditorProps {
  customImages: Record<string, string>;
  onUpload: (mood: string, base64: string) => void;
  onClose: () => void;
  onReset: () => void;
}

const MOODS: (LunaMood | 'sleeping')[] = [
  'neutral', 'surprised', 'sad', 'winking', 
  'thinking', 'excited', 'determined', 'sleeping'
];

const MascotEditor: React.FC<MascotEditorProps> = ({ customImages, onUpload, onClose, onReset }) => {
  const handleFileChange = (mood: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(mood, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-8 lg:p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h2 className="text-3xl font-serif-elegant text-black leading-none mb-2">Mascot Studio</h2>
            <p className="text-sm font-black text-indigo-600 uppercase tracking-widest">Upload your own character images</p>
          </div>
          <div className="flex gap-4">
             <button 
              onClick={onReset}
              className="px-6 py-3 text-xs font-black text-rose-600 hover:bg-rose-50 rounded-full transition-colors uppercase tracking-widest"
            >
              Reset to Default
            </button>
            <button 
              onClick={onClose}
              className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {MOODS.map((mood) => (
              <div key={mood} className="group relative flex flex-col gap-3">
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 group-hover:border-indigo-500 transition-colors relative">
                  {customImages[mood] ? (
                    <img src={customImages[mood]} alt={mood} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  )}
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => handleFileChange(mood, e)}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Replace</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{mood}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-indigo-50 rounded-[2rem] border-2 border-indigo-100">
            <h4 className="text-indigo-900 font-black text-sm uppercase tracking-widest mb-2">Pro Tip:</h4>
            <p className="text-indigo-700 text-sm leading-relaxed font-bold">
              For the best experience, use square images (1:1 ratio) with a consistent background. 
              These changes will be saved to your browser so your mascot stays with you!
            </p>
          </div>
        </div>

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-4 bg-black text-white rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform active:scale-95"
          >
            Finished Personalizing
          </button>
        </div>
      </div>
    </div>
  );
};

export default MascotEditor;
