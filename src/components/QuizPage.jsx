// src/pages/QuizPage.jsx
import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import './QuizPage.css';

import easy from '../data/quiz/easy.json';
import medium from '../data/quiz/medium.json';
import hard from '../data/quiz/hard.json';
import veryHard from '../data/quiz/veryHard.json';

const characterThemes = {
  easy: {
    name: "Beren",
    color: "#6b8e23", // Olive green
    quote: "Even the bravest can be broken, but love endures.",
    background: "/images/beren-bg.jpg",
  },
  medium: {
    name: "Túrin",
    color: "#4682b4", // Steel blue
    quote: "Doom walks beside me, yet I fight on.",
    background: "/images/turin-bg.jpg",
  },
  hard: {
    name: "Fingolfin",
    color: "#d4af37", // Indigo
    quote: "Alone he rode, and challenged the Dark Lord.",
    background: "/images/fingolfin-bg.jpg",
  },
  veryHard: {
    name: "Fëanor",
    color: "#b22222", // Firebrick
    quote: "No oath may bind me stronger than my wrath.",
    background: "/images/feanor-bg.jpg",
  },
};

const difficultyMap = {
  easy,
  medium,
  hard,
  veryHard,
};

const categories = ['All', 'Geography', 'Lineages', 'Weapons'];

const QuizPage = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState('All');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showAllScores, setShowAllScores] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [timeLeft, setTimeLeft] = useState(20);
  const timerRef = useRef(null);
  const [fadeTransition, setFadeTransition] = useState(true);
  const [width, height] = useWindowSize();

  const startQuiz = (level) => {
    const allQuestions = difficultyMap[level].questions;
    const filtered = category === 'All'
      ? allQuestions
      : allQuestions.filter((q) => q.category?.toLowerCase() === category.toLowerCase());

    if (filtered.length === 0) {
      alert(`No questions found for ${level} (${category})`);
      return;
    }

    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    shuffled.forEach((q) => q.options.sort(() => Math.random() - 0.5));

    setDifficulty(level);
    setSelectedQuestions(shuffled);
    setQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setTimeLeft(20);
    setShowResult(false);
  };

  useEffect(() => {
    if (difficulty && !showResult) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleAnswer(null);
            return 20;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [questionIndex, difficulty, showResult]);

  const handleAnswer = (option) => {
    clearInterval(timerRef.current);
    const current = selectedQuestions[questionIndex];
    const isCorrect = option === current.answer;

    setAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        selected: option,
        correct: current.answer,
        isCorrect,
        options: current.options,
      },
    ]);

    if (isCorrect) setScore((prev) => prev + 1);

    if (questionIndex + 1 < selectedQuestions.length) {
      setFadeTransition(false);
      setTimeout(() => {
        setQuestionIndex((prev) => prev + 1);
        setTimeLeft(20);
        setFadeTransition(true);
      }, 300);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      const highscoreKey = `highscore-${difficulty}-${category}`;
      const leaderboardKey = `scores-${difficulty}-${category}`;

      const best = parseInt(localStorage.getItem(highscoreKey));
      if (!best || finalScore > best) {
        localStorage.setItem(highscoreKey, finalScore);
      }

      const storedScores = JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
      storedScores.push({ name: playerName, score: finalScore, date: new Date().toISOString() });
      localStorage.setItem(leaderboardKey, JSON.stringify(storedScores));

      setScore(finalScore);
      setShowResult(true);
    }
  };

  const getTopScoresForDifficulty = (level, cat) => {
    const scores = JSON.parse(localStorage.getItem(`scores-${level}-${cat}`) || '[]');
    return scores.sort((a, b) => b.score - a.score).slice(0, 5);
  };

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const theme = characterThemes[difficulty];

  if (!difficulty) {
    return (
      <div className="quiz-container">
        <h2>Select Difficulty</h2>
        {!nameSubmitted ? (
          <>
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="name-input"
            />
            <button className="continue-button" onClick={() => playerName.trim() && setNameSubmitted(true)}>Continue</button>
          </>
        ) : (
          <>
            <h3>Select Category</h3>
            <div className="category-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={category === cat ? 'active' : ''}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <h3>Now pick a difficulty</h3>
            <button onClick={() => startQuiz('easy')}>Easy</button>
            <button onClick={() => startQuiz('medium')}>Medium</button>
            <button onClick={() => startQuiz('hard')}>Hard</button>
            <button onClick={() => startQuiz('veryHard')}>Very Hard</button>
          </>
        )}
      </div>
    );
  }

  if (showResult) {
    const highScore = localStorage.getItem(`highscore-${difficulty}-${category}`);
    const topScores = getTopScoresForDifficulty(difficulty, category);
    return (
      <>
        {score === selectedQuestions.length && (
          <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />
        )}
        <div className="quiz-container fade-in">
          <h2>🎉 Quiz Complete!</h2>
          <p>{playerName}, your score: <strong>{score} / {selectedQuestions.length}</strong></p>
          <p>🏅 High score ({difficulty}, {category}): {highScore}</p>

          <h3>🏆 Top Scores</h3>
          <ol>
            {topScores.map((entry, idx) => (
              <li key={idx}>{entry.name} — {entry.score}</li>
            ))}
          </ol>

          <h3>📘 Review Your Answers</h3>
          <ul className="answer-review">
            {answers.map((a, idx) => (
              <li key={idx}>
                <strong>{a.question}</strong>
                <ul>
                  {a.options.map((opt) => (
                    <li
                      key={opt}
                      style={{
                        color: opt === a.correct ? 'lightgreen' : opt === a.selected ? 'tomato' : 'inherit',
                        fontWeight: opt === a.correct || opt === a.selected ? 'bold' : 'normal',
                      }}
                    >
                      {opt} {opt === a.correct ? '✅' : opt === a.selected ? '❌' : ''}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <button onClick={() => {
            localStorage.removeItem(`highscore-${difficulty}-${category}`);
            localStorage.removeItem(`scores-${difficulty}-${category}`);
            alert(`Leaderboard for ${difficulty} (${category}) reset.`);
          }}>
            🔄 Reset Leaderboard
          </button>

          <button onClick={() => {
            ['easy', 'medium', 'hard', 'veryHard'].forEach((level) => {
              categories.forEach((cat) => {
                localStorage.removeItem(`highscore-${level}-${cat}`);
                localStorage.removeItem(`scores-${level}-${cat}`);
              });
            });
            alert('All leaderboards reset.');
          }}>
            🧹 Reset All Leaderboards
          </button>

          <button onClick={() => {
            setDifficulty(null);
            setNameSubmitted(false);
            setPlayerName('');
          }}>
            Try Another
          </button>
        </div>
      </>
    );
  }

  const current = selectedQuestions[questionIndex];
  const progressPercent = (timeLeft / 20) * 100;

  return (
    <div
  className={`quiz-container ${fadeTransition ? 'fade-in' : 'fade-out'}`}
  style={{
    backgroundImage: `url(${theme?.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderColor: theme?.color,
  }}
>
      <h3>{difficulty.toUpperCase()} MODE – {category}</h3>
      <h3 style={{ color: theme?.color }}>{theme?.name} Mode</h3>
<blockquote style={{ fontStyle: 'italic', margin: '1rem 0', color: theme?.color }}>
  “{theme?.quote}”
</blockquote>
      <div className="timer-bar" style={{ width: `${progressPercent}%` }}></div>
      <h2>{current.question}</h2>
      <div className="options">
      {current.options.map((option) => (
  <button
    key={option}
    onClick={() => handleAnswer(option)}
    style={{
      borderColor: theme?.color,
      backgroundColor: 'rgba(0,0,0,0.8)',
      color: theme?.color,
    }}
  >
    {option}
  </button>
))}
      </div>
      <p>Question {questionIndex + 1} / {selectedQuestions.length}</p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${((questionIndex + 1) / selectedQuestions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizPage;