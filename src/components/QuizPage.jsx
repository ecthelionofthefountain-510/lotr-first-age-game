import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import './QuizPage.css';

import easy from '../data/quiz/easy.json';
import medium from '../data/quiz/medium.json';
import hard from '../data/quiz/hard.json';
import veryHard from '../data/quiz/veryHard.json';
import impossible from '../data/quiz/impossible.json';

const difficultyMap = { easy, medium, hard, veryHard, impossible };
const categories = ['All', 'Geography', 'Lineages', 'Weapons'];

const characterThemes = {
  easy: {
    name: 'Beren', color: '#6b8e23',
    quote: 'Even the bravest can be broken, but love endures.',
    background: 'public/assets/quiz-images/beren-bg.png',
  },
  medium: {
    name: 'Túrin', color: '#4682b4',
    quote: 'Doom walks beside me, yet I fight on.',
    background: 'public/assets/quiz-images/turin-bg.png',
  },
  hard: {
    name: 'Fingolfin', color: '#d4af37',
    quote: 'Alone he rode, and challenged the Dark Lord.',
    background: 'public/assets/quiz-images/fingolfin-bg.png',
  },
  veryHard: {
    name: 'Fênor', color: '#b22222',
    quote: 'No oath may bind me stronger than my wrath.',
    background: 'public/assets/quiz-images/feanor-bg.png',
  },
  impossible: {
    name: 'Tom Bombadil', color: '#2ecc71',
    quote: 'Old Tom Bombadil is a merry fellow, bright blue his jacket is, and his boots are yellow!',
    background: 'public/assets/quiz-images/tommyb-bg.png',
  },
  random: {
    name: 'Eru Ilúvatar', color: '#ffffff',
    quote: 'From the Music came all things, and I am the One.',
    background: 'public/assets/quiz-images/eru-bg.png',
  },
};

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
  const [fadeTransition, setFadeTransition] = useState(true);
  const timerRef = useRef(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (selectedQuestions.length && !showResult) {
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
  }, [questionIndex, selectedQuestions, showResult]);

  const handleStartQuiz = () => {
    if (!playerName.trim() || !difficulty) return;
    const getQuestions = () => {
      if (difficulty === 'random') {
        const all = [...easy.questions, ...medium.questions, ...hard.questions, ...veryHard.questions, ...impossible.questions];
        return category === 'All' ? all : all.filter(q => q.category?.toLowerCase() === category.toLowerCase());
      } else {
        const base = difficultyMap[difficulty].questions;
        return category === 'All' ? base : base.filter(q => q.category?.toLowerCase() === category.toLowerCase());
      }
    };
    const shuffled = getQuestions().sort(() => Math.random() - 0.5).slice(0, 10);
    shuffled.forEach(q => q.options.sort(() => Math.random() - 0.5));
    setSelectedQuestions(shuffled);
    setQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setTimeLeft(20);
    setShowResult(false);
  };

  const handleAnswer = (option) => {
    clearInterval(timerRef.current);
    const current = selectedQuestions[questionIndex];
    const isCorrect = option === current.answer;

    setAnswers((prev) => [...prev, {
      question: current.question,
      selected: option,
      correct: current.answer,
      isCorrect,
      options: current.options,
    }]);

    if (isCorrect) setScore(prev => prev + 1);

    if (questionIndex + 1 < selectedQuestions.length) {
      setFadeTransition(false);
      setTimeout(() => {
        setQuestionIndex(prev => prev + 1);
        setTimeLeft(20);
        setFadeTransition(true);
      }, 300);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      const key = `${difficulty}-${category}`;
      const highscoreKey = `highscore-${key}`;
      const leaderboardKey = `scores-${key}`;

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

  const theme = characterThemes[difficulty];

  if (!selectedQuestions.length) {
    return (
      <div className="quiz-container">
  {!nameSubmitted ? (
    <>
      <h2>Tell Us Thy Name, O Wanderer</h2>
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
            <h1>Select Category</h1>
            <div className="category-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-button ${category === cat ? 'selected' : ''}`}
                  onClick={() => setCategory(cat)}
                >{cat}</button>
              ))}
            </div>
            <h1>and pick a difficulty</h1>
            <div className="difficulty-buttons">
              {Object.keys(difficultyMap).concat('random').map((level) => (
                <button
                  key={level}
                  className={`difficulty-button ${difficulty === level ? 'selected' : ''}`}
                  onClick={() => setDifficulty(level)}
                >{level === 'random' ? '🎲 Random Mode' : level.charAt(0).toUpperCase() + level.slice(1)}</button>
              ))}
            </div>
            {difficulty && playerName && (
              <button className="start-quiz-button" onClick={handleStartQuiz}>Start Quiz</button>
            )}
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
          <h2> Quiz Complete!</h2>
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
                    >{opt} {opt === a.correct ? '✅' : opt === a.selected ? '❌' : ''}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <button onClick={() => {
            localStorage.removeItem(`highscore-${difficulty}-${category}`);
            localStorage.removeItem(`scores-${difficulty}-${category}`);
            alert(`Leaderboard for ${difficulty} (${category}) reset.`);
          }}>🔄 Reset Leaderboard</button>

          <button onClick={() => {
            ['easy', 'medium', 'hard', 'veryHard', 'impossible'].forEach((level) => {
              categories.forEach((cat) => {
                localStorage.removeItem(`highscore-${level}-${cat}`);
                localStorage.removeItem(`scores-${level}-${cat}`);
              });
            });
            alert('All leaderboards reset.');
          }}>🧹 Reset All Leaderboards</button>

          <button onClick={() => {
            setDifficulty(null);
            setNameSubmitted(false);
            setPlayerName('');
            setSelectedQuestions([]);
          }}>Try Another</button>
        </div>
      </>
    );
  }

  const progressPercent = (timeLeft / 20) * 100;

  return (
    <div
      className={`quiz-container ${fadeTransition ? 'fade-in' : 'fade-out'}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${theme?.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderColor: theme?.color,
        color: 'white',
      }}
    >
      <h3>{difficulty.toUpperCase()} MODE – {category}</h3>
      <blockquote style={{
        fontStyle: 'italic',
        margin: '1rem auto',
        color: theme?.color,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        maxWidth: '80%',
        textAlign: 'center',
      }}>
        “{theme?.quote}”
      </blockquote>
      <div className="timer-bar" style={{ width: `${progressPercent}%` }}></div>
      <h2>{selectedQuestions[questionIndex].question}</h2>
      <div className="options">
        {selectedQuestions[questionIndex].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            style={{
              borderColor: theme?.color,
              backgroundColor: 'rgba(0,0,0,0.8)',
              color: theme?.color,
            }}
          >{option}</button>
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
