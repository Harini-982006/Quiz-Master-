
import React from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
  onNext: () => void;
  timer: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelect,
  onNext,
  timer
}) => {
  const isAnswered = selectedAnswer !== null;
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;
  const timerPercent = (timer / 15) * 100;

  // Colors for the option borders as seen in mockup
  const optionColors = [
    'border-cyan-400', 
    'border-fuchsia-500', 
    'border-orange-400', 
    'border-indigo-500'
  ];

  const optionIconColors = [
    'text-cyan-400',
    'text-fuchsia-500',
    'text-orange-400',
    'text-indigo-500'
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#161d2f] px-5 py-2 rounded-full border border-gray-800 text-sm font-bold text-gray-200">
          {question.category}
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Question</div>
          <div className="text-2xl font-black text-white">
            <span className="text-cyan-400">{currentIndex + 1}</span>
            <span className="text-gray-600">/{totalQuestions}</span>
          </div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="w-full h-2 bg-[#161d2f] rounded-full mb-12 overflow-hidden border border-gray-800">
        <div 
          className="h-full gradient-bg transition-all duration-500" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Timer Section */}
      <div className="flex justify-between items-center mb-2 px-1">
        <div className="flex items-center gap-2 text-gray-400">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
           <span className="text-sm font-bold">Time Remaining</span>
        </div>
        <div className="text-2xl font-black text-cyan-400">{timer}s</div>
      </div>
      <div className="w-full h-2 bg-[#161d2f] rounded-full mb-16 overflow-hidden border border-gray-800">
        <div 
          className={`h-full transition-all duration-1000 ${timer <= 5 ? 'bg-orange-500' : 'bg-gradient-to-r from-yellow-400 to-cyan-400'}`}
          style={{ width: `${timerPercent}%` }}
        />
      </div>

      {/* Question Text */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          {question.text}
        </h2>
      </div>

      {/* Answers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswerIndex;
          const isSelected = index === selectedAnswer;
          
          let containerClass = `relative w-full p-6 rounded-2xl border-2 text-left font-bold text-xl transition-all duration-200 flex items-center justify-between `;
          
          if (!isAnswered) {
            containerClass += `${optionColors[index]} bg-[#0b1121] hover:bg-[#161d2f] text-white`;
          } else {
            if (isCorrect) {
              containerClass += `bg-emerald-950/40 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]`;
            } else if (isSelected) {
              containerClass += `bg-rose-950/40 border-rose-500 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)]`;
            } else {
              containerClass += `border-gray-800 bg-[#0b1121] text-gray-600 opacity-40`;
            }
          }

          return (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() => onSelect(index)}
              className={containerClass}
            >
              <div className="flex items-center gap-6">
                <span className={`w-10 h-10 rounded-xl bg-[#161d2f] border border-gray-700 flex items-center justify-center text-lg ${!isAnswered ? optionIconColors[index] : ''}`}>
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </div>
              
              {isAnswered && isCorrect && (
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
              )}
              {isAnswered && isSelected && !isCorrect && (
                <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-black shadow-lg">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="flex justify-center animate-bounce">
           <button
             onClick={onNext}
             className="px-12 py-4 gradient-bg text-black font-extrabold text-xl rounded-2xl shadow-xl hover:scale-105 transition-all"
           >
             {currentIndex === totalQuestions - 1 ? 'Show Results' : 'Next Question'}
           </button>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
