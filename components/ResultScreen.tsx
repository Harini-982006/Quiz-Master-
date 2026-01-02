
import React from 'react';

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  const totalScorePoints = score * 100;
  
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-6 text-center">
      {/* Trophy Section */}
      <div className="mb-10 relative">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center dashed-glow">
          <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path d="M8 21h8M12 17v4M7 4h10M5 4v5a7 7 0 007 7h0a7 7 0 007-7V4M3 4h2M19 4h2" />
          </svg>
        </div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl">📚</div>
      </div>

      <h2 className="text-5xl font-black mb-2 gradient-text">Keep Practicing!</h2>
      <p className="text-gray-400 font-bold mb-12">Quiz completed successfully!</p>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-12 w-full">
        <div className="bg-[#161d2f] p-6 rounded-2xl border border-gray-800">
           <div className="text-cyan-400 mb-2 flex justify-center">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
           </div>
           <div className="text-2xl font-black text-white">{percentage}%</div>
           <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Accuracy</div>
        </div>
        <div className="bg-[#161d2f] p-6 rounded-2xl border border-gray-800">
           <div className="text-yellow-400 mb-2 flex justify-center">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
           </div>
           <div className="text-2xl font-black text-white">{totalScorePoints}</div>
           <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Score</div>
        </div>
        <div className="bg-[#161d2f] p-6 rounded-2xl border border-gray-800">
           <div className="text-emerald-400 mb-2 flex justify-center">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
           </div>
           <div className="text-2xl font-black text-white">{score}/{total}</div>
           <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Correct</div>
        </div>
      </div>

      {/* Performance Bar */}
      <div className="w-full bg-[#161d2f] rounded-2xl p-6 border border-gray-800 mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400 font-bold">Performance</span>
          <span className="text-cyan-400 font-black">{percentage}%</span>
        </div>
        <div className="w-full h-3 bg-gray-900 rounded-full overflow-hidden">
          <div className="h-full gradient-bg" style={{ width: `${percentage}%` }} />
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full py-5 gradient-bg text-black font-extrabold text-2xl rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:scale-[1.03] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
        Play Again
      </button>
    </div>
  );
};

export default ResultScreen;
