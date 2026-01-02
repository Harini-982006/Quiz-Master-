
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto px-6 text-center">
      {/* Logo Icon */}
      <div className="mb-10 relative">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center dashed-glow">
          <svg className="w-12 h-12 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-6xl font-black mb-4 flex items-baseline">
        <span className="text-white">Quiz</span>
        <span className="gradient-text">Master</span>
      </h1>
      
      <p className="text-gray-400 text-lg font-medium mb-12">
        Test your knowledge with exciting questions across various categories!
      </p>

      {/* Info Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-14 w-full">
        <div className="flex items-center gap-2 px-5 py-3 bg-[#161d2f] border border-gray-800 rounded-2xl">
          <span className="text-cyan-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </span>
          <span className="text-white font-bold">10 Questions</span>
        </div>
        <div className="flex items-center gap-2 px-5 py-3 bg-[#161d2f] border border-gray-800 rounded-2xl">
          <span className="text-fuchsia-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </span>
          <span className="text-white font-bold">15s Timer</span>
        </div>
        <div className="flex items-center gap-2 px-5 py-3 bg-[#161d2f] border border-gray-800 rounded-2xl">
          <span className="text-orange-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          </span>
          <span className="text-white font-bold">Score Points</span>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full py-5 gradient-bg text-black font-extrabold text-2xl rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-[1.03] transition-all duration-200 active:scale-95 mb-6"
      >
        Start Quiz
      </button>

      <p className="text-gray-500 font-medium text-sm">
        Press Start when you're ready!
      </p>
    </div>
  );
};

export default StartScreen;
