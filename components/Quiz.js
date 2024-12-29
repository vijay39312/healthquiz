import React, { useState, useEffect, useRef } from "react";
import { correctStatements, incorrectStatements } from "../data/statements";
import Slider from "react-slick";
import styles from "../styles/Quiz.module.css";

// Utility: generate 3 random sets (2 correct + 1 incorrect each)
function getRandomSets(correct, incorrect) {
  const shuffledCorrect = [...correct].sort(() => 0.5 - Math.random());
  const shuffledIncorrect = [...incorrect].sort(() => 0.5 - Math.random());

  const sets = [];
  for (let i = 0; i < 3; i++) {
    const twoCorrect = shuffledCorrect.slice(i * 2, i * 2 + 2);
    const oneIncorrect = shuffledIncorrect[i];
    const combined = [...twoCorrect, oneIncorrect].sort(() => 0.5 - Math.random());
    sets.push(combined);
  }
  return sets;
}

export default function QuizCarousel() {
  const [quizSets, setQuizSets] = useState([]);
  const [answers, setAnswers] = useState({}); // { setIndex: chosenStatement }
  const [score, setScore] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Generate the quiz sets on initial mount
  useEffect(() => {
    const sets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(sets);
  }, []);

  // Slider settings (disable built-in arrows/dots, no swipe)
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  // Handle user selecting an answer
  const handleChange = (setIndex, statement) => {
    setAnswers((prev) => ({
      ...prev,
      [setIndex]: statement,
    }));
  };

  // "Next" button
  const handleNext = () => {
    if (answers[currentSlide]) {
      sliderRef.current.slickNext();
    }
  };

  // "Previous" button
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // "Done" button → calculate score, show final results
  const handleDone = () => {
    if (answers[currentSlide]) {
      let newScore = 0;
      quizSets.forEach((set, index) => {
        const userChoice = answers[index];
        if (userChoice && incorrectStatements.includes(userChoice)) {
          newScore++;
        }
      });
      setScore(newScore);
    }
  };

  // Reset the entire quiz
  const resetQuiz = () => {
    const newSets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(newSets);
    setAnswers({});
    setScore(null);
    setCurrentSlide(0);
    // Move the slider back to the first slide
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  // Determine the CSS class for each statement after submission
  const getStatementClass = (statement, setIndex) => {
    if (score === null) return styles.defaultOption;

    const userChoice = answers[setIndex];
    const isIncorrectStmt = incorrectStatements.includes(statement);
    const isChosen = userChoice === statement;

    // User chose the incorrect statement => correct => highlight
    if (isChosen && isIncorrectStmt) {
      return styles.correctChoice;
    }
    // User chose a correct statement => wrong
    if (isChosen && !isIncorrectStmt) {
      return styles.wrongChoice;
    }
    // The actual incorrect statement (not chosen) => show correct
    if (!isChosen && isIncorrectStmt) {
      return styles.correctChoice;
    }
    return styles.defaultOption;
  };

  // If quizSets is still loading
  if (quizSets.length === 0) return null;

  const totalSets = quizSets.length;
  const isLastSlide = currentSlide === totalSets - 1;
  const userHasAnsweredCurrent = !!answers[currentSlide];

  // Slides for the quiz
  const quizSlides = quizSets.map((set, setIndex) => (
    <div key={setIndex}>
      {/* 
        We could show a dynamic subheader for each set if you like,
        but let's keep it minimal — just the options below
      */}
      {set.map((statement, stmtIndex) => (
        <label
          key={stmtIndex}
          className={styles.quizOption}
        >
          {/* Hidden radio for selection */}
          <input
            type="radio"
            name={`set-${setIndex}`}
            value={statement}
            checked={answers[setIndex] === statement}
            onChange={() => handleChange(setIndex, statement)}
            disabled={score !== null}
          />
          {/* A/B/C badge */}
          <span className={styles.quizBadge}>
            {String.fromCharCode(65 + stmtIndex)} {/* 65 => 'A' */}
          </span>
          {/* The statement text */}
          <span className={`${styles.quizText} ${getStatementClass(statement, setIndex)}`}>
            {statement}
          </span>
        </label>
      ))}
    </div>
  ));

  return (
    <div className={styles.quizWrapper}>
      <h2 className={styles.quizTitle}>Health Quiz</h2>
      <p className={styles.quizSubtitle}>
        Identify the <strong>incorrect</strong> statement in each set.
      </p>

      <div className={styles.quizCard}>
        {/* Gradient header on top of the card */}
        <div className={styles.quizHeader}>
          <p>What’s the lie?</p>
        </div>

        {/* If the quiz is still in progress, show the Slider */}
        {score === null && (
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className={styles.quizSlider}
          >
            {quizSlides}
          </Slider>
        )}

        {/* Show navigation buttons if the quiz isn't finished */}
        {score === null && (
          <div className={styles.buttonGroup}>
            <button onClick={handlePrev} disabled={currentSlide === 0}>
              Previous
            </button>

            {!isLastSlide ? (
              <button onClick={handleNext} disabled={!userHasAnsweredCurrent}>
                Next
              </button>
            ) : (
              <button onClick={handleDone} disabled={!userHasAnsweredCurrent}>
                Done
              </button>
            )}
          </div>
        )}

        {/* If quiz is done, show final results (all sets) */}
        {score !== null && (
          <div className={styles.resultContainer}>
            <p>
              Your score: {score} / {totalSets}
            </p>
            <p>Below are all the sets with correct/incorrect highlights:</p>

            {quizSets.map((set, setIndex) => (
              <div key={setIndex} style={{ marginBottom: "1rem" }}>
                <h3>Set {setIndex + 1}</h3>
                {set.map((statement, stmtIndex) => (
                  <label
                    key={stmtIndex}
                    className={styles.quizOption}
                    style={{ cursor: "default" }}
                  >
                    <input
                      type="radio"
                      name={`results-set-${setIndex}`}
                      checked={answers[setIndex] === statement}
                      readOnly
                    />
                    <span className={styles.quizBadge}>
                      {String.fromCharCode(65 + stmtIndex)}
                    </span>
                    <span className={`${styles.quizText} ${getStatementClass(statement, setIndex)}`}>
                      {statement}
                    </span>
                  </label>
                ))}
              </div>
            ))}

            <button onClick={resetQuiz} style={{ marginTop: 20 }}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}