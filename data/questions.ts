
import { Question } from '../types';

export const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which planet is known as the 'Red Planet'?",
    category: "Science",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswerIndex: 1
  },
  {
    id: 2,
    text: "What is the capital city of Japan?",
    category: "Geography",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswerIndex: 2
  },
  {
    id: 3,
    text: "What is the largest ocean on Earth?",
    category: "Geography",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswerIndex: 3
  },
  {
    id: 4,
    text: "Who wrote 'Romeo and Juliet'?",
    category: "Literature",
    options: ["Dickens", "Shakespeare", "Twain", "Austen"],
    correctAnswerIndex: 1
  },
  {
    id: 5,
    text: "What is the chemical symbol for gold?",
    category: "Chemistry",
    options: ["Ag", "Fe", "Au", "Pb"],
    correctAnswerIndex: 2
  },
  {
    id: 6,
    text: "How many continents are there?",
    category: "Geography",
    options: ["5", "6", "7", "8"],
    correctAnswerIndex: 2
  },
  {
    id: 7,
    text: "Boiling point of water at sea level?",
    category: "Science",
    options: ["50°C", "90°C", "100°C", "120°C"],
    correctAnswerIndex: 2
  },
  {
    id: 8,
    text: "Largest mammal in the world?",
    category: "Nature",
    options: ["African Elephant", "Blue Whale", "Giraffe", "White Rhino"],
    correctAnswerIndex: 1
  },
  {
    id: 9,
    text: "What is the square root of 64?",
    category: "Math",
    options: ["6", "7", "8", "9"],
    correctAnswerIndex: 2
  },
  {
    id: 10,
    text: "Symbol 'O' on the periodic table?",
    category: "Chemistry",
    options: ["Osmium", "Oxygen", "Ozone", "Oxide"],
    correctAnswerIndex: 1
  }
];

export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
