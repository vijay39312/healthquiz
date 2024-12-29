import React, { useState, useEffect, useRef } from "react";
import { correctStatements, incorrectStatements } from "../data/statements";
import Slider from "react-slick";
import styles from "../styles/Quiz.module.css";

// Utility to get 3 random sets: each set has 2 correct + 1 incorrect
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

  // Generate new sets on initial load
  useEffect(() => {
    const sets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(sets);
  }, []);

  // Slider settings: no default arrows/dots, no swipe
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

  // Handle radio input changes
  const handleChange = (setIndex, statement) => {
    setAnswers((prev) => ({
      ...prev,
      [setIndex]: statement,
    }));
  };

  // Next button
  const handleNext = () => {
    if (answers[currentSlide]) {
      sliderRef.current.slickNext();
    }
  };

  // Previous button
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Done button -> calculate score & show final results
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

  // Reset quiz & go back to first slide
  const resetQuiz = () => {
    const newSets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(newSets);
    setAnswers({});
    setScore(null);
    setCurrentSlide(0);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // This no longer fails because the slider is still mounted
    }
  };

  // Decide which CSS class to apply for highlighting
  const getStatementClass = (statement, setIndex) => {
    if (score === null) return styles.defaultOption;

    const userChoice = answers[setIndex];
    const isIncorrectStmt = incorrectStatements.includes(statement);
    const isChosen = userChoice === statement;

    // User chose the incorrect statement => correct => green
    if (isChosen && isIncorrectStmt) {
      return styles.correctChoice;
    }
    // User chose a correct statement => wrong => red
    if (isChosen && !isIncorrectStmt) {
      return styles.wrongChoice;
    }
    // Actual incorrect statement (not chosen) => show in green
    if (!isChosen && isIncorrectStmt) {
      return styles.correctChoice;
    }
    return styles.defaultOption;
  };

  // If data isn’t ready yet
  if (quizSets.length === 0) return null;

  const totalSets = quizSets.length;
  const isLastSlide = currentSlide === totalSets - 1;
  const userHasAnsweredCurrent = !!answers[currentSlide];

  // The quiz slides for answering, one set per slide
  const quizSlides = quizSets.map((set, setIndex) => (
    <div key={setIndex}>
      <h3>Set {setIndex + 1}</h3>
      {set.map((statement, stmtIndex) => (
        <div key={stmtIndex} className={styles.radioOption}>
          <label className={getStatementClass(statement, setIndex)}>
            <input
              type="radio"
              name={`set-${setIndex}`}
              value={statement}
              checked={answers[setIndex] === statement}
              onChange={() => handleChange(setIndex, statement)}
              disabled={score !== null}
              style={{ marginRight: 8 }}
            />
            {statement}
          </label>
        </div>
      ))}
    </div>
  ));

  return (
    <div className={styles.quizContainer}>
      {/* Updated headings */}
      <h1>Health Quiz</h1>
      <p>
        Identify the <strong>incorrect</strong> statement in each set.
      </p>

      {/* 
        1) We always mount the Slider, but hide it after the quiz is done.
        2) This ensures sliderRef is never null. 
      */}
      <Slider
        ref={sliderRef}
        {...sliderSettings}
        style={{ display: score !== null ? "none" : "block" }}
      >
        {quizSlides}
      </Slider>

      {/* The "Previous/Next/Done" buttons only appear if the quiz is in progress */}
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

      {/* Final results only appear once the quiz is done (score !== null) */}
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
                <div key={stmtIndex} className={styles.radioOption}>
                  <label className={getStatementClass(statement, setIndex)}>
                    <input
                      type="radio"
                      name={`results-set-${setIndex}`}
                      checked={answers[setIndex] === statement}
                      readOnly
                      style={{ marginRight: 8 }}
                    />
                    {statement}
                  </label>
                </div>
              ))}
            </div>
          ))}

          <button onClick={resetQuiz} style={{ marginTop: 20 }}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}