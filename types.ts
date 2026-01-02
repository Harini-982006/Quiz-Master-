
export interface Question {
  id: number;
  text: string;
  category: string;
  options: string[];
  correctAnswerIndex: number;
}

export enum GameStatus {
  START = 'START',
  PLAYING = 'PLAYING',
  RESULT = 'RESULT'
}

export interface QuizState {
  status: GameStatus;
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: number | null;
  questions: Question[];
  timer: number;
}
