import React, { useState, useEffect, useRef } from "react";
import { correctStatements, incorrectStatements } from "../data/statements";
import Slider from "react-slick";
import styles from "../styles/Quiz.module.css";

// Utility to generate 3 sets (2 correct + 1 incorrect)
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
// Returns a ✅ or ❌ (or empty) based on correctness
function getResultIcon(statement, setIndex, answers, incorrectStatements, score) {
    // If quiz not submitted yet, no icon
    if (score === null) return "";
  
    const userChoice = answers[setIndex];
    const isIncorrectStmt = incorrectStatements.includes(statement);
    const isChosen = userChoice === statement;
  
    // If user chose the incorrect statement => correct => green tick
    if (isChosen && isIncorrectStmt) {
      return "✅";
    }
    // If user chose a correct statement => wrong => red cross
    if (isChosen && !isIncorrectStmt) {
      return "❌";
    }
    // If it’s the actual incorrect statement but not chosen => also green tick
    if (!isChosen && isIncorrectStmt) {
      return "✅";
    }
  
    // Otherwise, no icon
    return "";
  }
  
export default function QuizCarousel() {
  const [quizSets, setQuizSets] = useState([]);
  const [answers, setAnswers] = useState({}); // { setIndex: chosenStatement }
  const [score, setScore] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Generate sets on mount
  useEffect(() => {
    const sets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(sets);
  }, []);

  // react-slick settings
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

  // When user selects an option
  const handleChange = (setIndex, statement) => {
    setAnswers((prev) => ({
      ...prev,
      [setIndex]: statement,
    }));
  };

  // Next/Prev/Done logic
  const handleNext = () => {
    if (answers[currentSlide]) {
      sliderRef.current.slickNext();
    }
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
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

  // Reset everything
  const resetQuiz = () => {
    const newSets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(newSets);
    setAnswers({});
    setScore(null);
    setCurrentSlide(0);
    sliderRef.current?.slickGoTo(0);
  };

  // Determine how to highlight statements
  const getStatementClass = (statement, setIndex) => {
    if (score === null) return styles.defaultOption;

    const userChoice = answers[setIndex];
    const isIncorrectStmt = incorrectStatements.includes(statement);
    const isChosen = userChoice === statement;

    // If user chose the incorrect statement => correct => green
    if (isChosen && isIncorrectStmt) return styles.correctChoice;
    // If user chose a correct statement => wrong => red
    if (isChosen && !isIncorrectStmt) return styles.wrongChoice;
    // If it’s the actual incorrect statement but not chosen => green
    if (!isChosen && isIncorrectStmt) return styles.correctChoice;
    return styles.defaultOption;
  };

  if (quizSets.length === 0) return null;

  const totalSets = quizSets.length;
  const isLastSlide = currentSlide === totalSets - 1;
  const userHasAnsweredCurrent = !!answers[currentSlide];

  // Build slides
  const quizSlides = quizSets.map((set, setIndex) => (
    <div key={setIndex}>
      {set.map((statement, stmtIndex) => (
        <label className={styles.quizOption} key={stmtIndex}>
          <input
            type="radio"
            name={`set-${setIndex}`}
            value={statement}
            checked={answers[setIndex] === statement}
            onChange={() => handleChange(setIndex, statement)}
            disabled={score !== null}
          />
          <span className={styles.quizBadge}>
            {String.fromCharCode(65 + stmtIndex)} {/* A, B, C, etc. */}
          </span>
          <span className={`${styles.quizText} ${getStatementClass(statement, setIndex)}`}>
            {statement}
          </span>
        </label>
      ))}
    </div>
  ));

  return (
    <div className={styles.quizWrapper}>
      {/* Main heading */}
      <h2 className={styles.quizTitle}>
        Two Truths and a Lie
      </h2>
      {/* Subheading */}
      <p className={styles.quizSubtitle}>
        How much do you know about your body?
      </p>

      {/* Card container */}
      <div className={styles.quizCard}>
        {/* Reintroduce "What's the lie?" inside the card */}
        <div className={styles.quizCardHeader}>
          <p className={styles.quizCardHeaderText}>What’s the lie?</p>
        </div>

        {/* If quiz not finished, show the Slider + nav buttons */}
        {score === null && (
          <>
            <Slider ref={sliderRef} {...sliderSettings} className={styles.quizSlider}>
              {quizSlides}
            </Slider>

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
          </>
        )}

        {/* If quiz finished, show final results */}
        {score !== null && (
          <div className={styles.resultContainer}>
            <p>
              Your score: {score} / {totalSets}
            </p>
            <p>Below are all the sets with correct/incorrect highlights:</p>

            {quizSets.map((set, setIndex) => (
                <div key={setIndex} style={{ marginBottom: "1rem" }}>
                    <h3>Set {setIndex + 1}</h3>
                    {set.map((statement, stmtIndex) => {
                    const icon = getResultIcon(statement, setIndex, answers, incorrectStatements, score);

                    return (
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
                        <span className={styles.quizText}>
                            {statement}{" "}
                            {/* Add the icon if present */}
                            {icon && <span style={{ marginLeft: "0.5rem" }}>{icon}</span>}
                        </span>
                        </label>
                    );
                    })}
                </div>
                ))}

            <div className={styles.buttonGroup}>
                <button onClick={resetQuiz} style={{ marginTop: 20 }}>
                    Try Again
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}