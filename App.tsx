
import React, { useState, useEffect, useRef } from 'react';
import { GameStatus, QuizState } from './types';
import { SAMPLE_QUESTIONS, shuffleArray } from './data/questions';
import { audioService } from './services/audioService';
import StartScreen from './components/StartScreen';
import QuizCard from './components/QuizCard';
import ResultScreen from './components/ResultScreen';

// Set to 15 as per the provided mockup
const SECONDS_PER_QUESTION = 15;

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    status: GameStatus.START,
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    questions: [],
    timer: SECONDS_PER_QUESTION
  });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startQuiz = () => {
    const shuffled = shuffleArray(SAMPLE_QUESTIONS);
    setState({
      status: GameStatus.PLAYING,
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      questions: shuffled,
      timer: SECONDS_PER_QUESTION
    });
  };

  const restartQuiz = () => {
    setState(prev => ({ ...prev, status: GameStatus.START }));
  };

  const handleSelectAnswer = (index: number) => {
    if (state.selectedAnswer !== null) return;

    const isCorrect = index === state.questions[state.currentQuestionIndex].correctAnswerIndex;
    
    if (isCorrect) {
      audioService.playSuccess();
    } else {
      audioService.playError();
    }

    setState(prev => ({
      ...prev,
      selectedAnswer: index,
      score: isCorrect ? prev.score + 1 : prev.score
    }));

    if (timerRef.current) clearInterval(timerRef.current);
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex === state.questions.length - 1) {
      setState(prev => ({ ...prev, status: GameStatus.RESULT }));
    } else {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        timer: SECONDS_PER_QUESTION
      }));
    }
  };

  // Timer logic
  useEffect(() => {
    if (state.status === GameStatus.PLAYING && state.selectedAnswer === null) {
      timerRef.current = setInterval(() => {
        setState(prev => {
          if (prev.timer <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            audioService.playError();
            // Automatically mark as missed (-1) on timeout
            return { ...prev, timer: 0, selectedAnswer: -1 };
          }
          return { ...prev, timer: prev.timer - 1 };
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state.status, state.currentQuestionIndex, state.selectedAnswer]);

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full">
        {state.status === GameStatus.START && (
          <StartScreen onStart={startQuiz} />
        )}

        {state.status === GameStatus.PLAYING && state.questions.length > 0 && (
          <QuizCard
            question={state.questions[state.currentQuestionIndex]}
            currentIndex={state.currentQuestionIndex}
            totalQuestions={state.questions.length}
            selectedAnswer={state.selectedAnswer}
            onSelect={handleSelectAnswer}
            onNext={nextQuestion}
            timer={state.timer}
          />
        )}

        {state.status === GameStatus.RESULT && (
          <ResultScreen
            score={state.score}
            total={state.questions.length}
            onRestart={restartQuiz}
          />
        )}
      </div>
      
      {/* Background radial glow */}
      <div className="fixed inset-0 -z-10 bg-[#0b1121]">
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] bg-fuchsia-900/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default App;
