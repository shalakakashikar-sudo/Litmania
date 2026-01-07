
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  title: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete, title }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  // Generate a randomized set of indices for the current question's options
  const shuffledIndices = useMemo(() => {
    if (!questions || !questions[currentStep]) return [];
    // Create an array of indices [0, 1, 2, 3...]
    const indices = questions[currentStep].options.map((_, i) => i);
    // Fisher-Yates shuffle algorithm
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [currentStep, questions]);

  // Scroll to the top of the quiz component whenever the step changes
  useEffect(() => {
    if (quizRef.current) {
      const parentModal = quizRef.current.closest('.custom-scrollbar');
      if (parentModal) {
        parentModal.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        quizRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep, isFinished]);

  if (!questions || questions.length === 0) {
    return (
      <div ref={quizRef} className="p-8 text-center animate-in zoom-in-95 duration-700">
        <div className="text-6xl mb-6">📚</div>
        <h3 className="text-2xl font-serif-elegant mb-4 text-black">Curriculum Pending</h3>
        <p className="text-lg text-slate-700 font-classic font-black mb-8">
          The masters are still curating the examination for this specific device.
        </p>
        <button
          onClick={() => onComplete(0)}
          className="px-8 py-3 bg-black text-white rounded-full font-black text-lg shadow-xl hover:scale-105 transition-all active:scale-95"
        >
          Return to Sanctuary
        </button>
      </div>
    );
  }

  const handleSelect = (shuffledIdx: number) => {
    if (showExplanation) return;
    setSelectedOption(shuffledIdx);
    setShowExplanation(true);
    
    // Check if the original index represented by this shuffled position is the correct one
    const originalIdx = shuffledIndices[shuffledIdx];
    if (originalIdx === questions[currentStep].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div ref={quizRef} className="p-8 text-center animate-in zoom-in-95 duration-700">
        <div className="text-6xl mb-6">🏆</div>
        <h3 className="text-3xl font-serif-elegant mb-4 text-black">Performance Mastery</h3>
        <div className="text-6xl font-black text-indigo-600 mb-4">{percentage}%</div>
        <p className="text-xl text-slate-700 font-classic font-black mb-10">
          You identified {score} out of {questions.length} devices correctly.
        </p>
        <button
          onClick={() => onComplete(score)}
          className="px-10 py-5 bg-black text-white rounded-full font-black text-xl shadow-xl hover:scale-110 transition-all active:scale-95"
        >
          Return to Sanctuary
        </button>
      </div>
    );
  }

  const currentQ = questions[currentStep];

  return (
    <div ref={quizRef} className="p-6 md:p-10 max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-xl border-2 border-slate-50">
      <h3 className="text-2xl md:text-3xl font-serif-elegant mb-6 text-black leading-tight border-b pb-4">{title}</h3>
      <div className="mb-3 text-[10px] md:text-xs text-indigo-600 font-black uppercase tracking-[0.3em]">
        Challenge {currentStep + 1} of {questions.length}
      </div>
      <div className="text-xl md:text-2xl text-black mb-8 font-black leading-snug">
        {currentQ.question}
      </div>

      <div className="space-y-3 md:space-y-4">
        {shuffledIndices.map((originalIdx, shuffledIdx) => {
          const opt = currentQ.options[originalIdx];
          let colorClass = "bg-white border-slate-200 hover:border-black text-black";
          
          if (showExplanation) {
            if (originalIdx === currentQ.correctAnswer) {
              colorClass = "bg-emerald-600 border-emerald-600 text-white scale-[1.01] shadow-lg";
            } else if (shuffledIdx === selectedOption) {
              colorClass = "bg-rose-600 border-rose-600 text-white";
            } else {
              colorClass = "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={`${currentStep}-${originalIdx}`}
              disabled={showExplanation}
              onClick={() => handleSelect(shuffledIdx)}
              className={`w-full p-4 md:p-5 text-left rounded-2xl border-2 transition-all duration-300 ${colorClass} shadow-sm font-bold text-sm md:text-base`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mt-6 p-6 bg-black text-white rounded-3xl animate-in slide-in-from-bottom-4 duration-500 shadow-xl">
          <div className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-2">The Deep Logic:</div>
          <p className="text-sm md:text-base leading-relaxed font-bold mb-6">
            {currentQ.explanation}
          </p>
          <button
            onClick={handleNext}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-base shadow-lg hover:bg-white hover:text-black transition-all transform active:scale-95"
          >
            {currentStep < questions.length - 1 ? "Next Challenge" : "See Final Results"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
