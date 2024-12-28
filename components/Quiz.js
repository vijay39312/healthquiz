import React, { useState, useEffect } from "react";
import { correctStatements, incorrectStatements } from "../data/statements";
import styles from "../styles/Quiz.module.css";

function getRandomSets(correct, incorrect) {
  // Shuffle arrays to randomize picking
  const shuffledCorrect = [...correct].sort(() => 0.5 - Math.random());
  const shuffledIncorrect = [...incorrect].sort(() => 0.5 - Math.random());

  const sets = [];
  // We want 3 sets, each set has 2 correct statements + 1 incorrect
  for (let i = 0; i < 3; i++) {
    const twoCorrect = shuffledCorrect.slice(i * 2, i * 2 + 2);
    const oneIncorrect = shuffledIncorrect[i];
    const combined = [...twoCorrect, oneIncorrect];
    // Shuffle the 3 statements so their order is random
    const shuffledSet = combined.sort(() => 0.5 - Math.random());
    sets.push(shuffledSet);
  }
  return sets;
}

export default function Quiz() {
  const [quizSets, setQuizSets] = useState([]);
  const [answers, setAnswers] = useState({}); // { setIndex: "chosenStatement" }
  const [score, setScore] = useState(null);

  // Generate quiz sets on mount
  useEffect(() => {
    const sets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(sets);
  }, []);

  // Handle user selection
  const handleChange = (setIndex, statement) => {
    setAnswers((prev) => ({
      ...prev,
      [setIndex]: statement,
    }));
  };

  // On submit, calculate score
  const handleSubmit = () => {
    let newScore = 0;
    quizSets.forEach((set, index) => {
      const userChoice = answers[index];
      // The user is "correct" if they chose the statement from the incorrect list
      if (userChoice && incorrectStatements.includes(userChoice)) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  // Reset everything
  const resetQuiz = () => {
    const sets = getRandomSets(correctStatements, incorrectStatements);
    setQuizSets(sets);
    setAnswers({});
    setScore(null);
  };

  // Determine the CSS class for each statement after submission
  const getStatementClass = (statement, setIndex) => {
    // If quiz hasn't been submitted yet, no color highlighting
    if (score === null) return styles.defaultOption;

    const userChoice = answers[setIndex];
    const isIncorrectStatement = incorrectStatements.includes(statement);
    const isChosen = userChoice === statement;

    // 1) User chose the "incorrect" statement => correct choice => highlight green
    if (isChosen && isIncorrectStatement) {
      return styles.correctChoice;
    }
    // 2) User chose a "correct" statement => highlight red
    if (isChosen && !isIncorrectStatement) {
      return styles.wrongChoice;
    }
    // 3) If this is the actual incorrect statement, but user did not choose it,
    //    still highlight it green so the user knows the right answer
    if (!isChosen && isIncorrectStatement) {
      return styles.correctChoice;
    }

    // 4) Everything else remains default (not chosen, and is a correct statement)
    return styles.defaultOption;
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>Identify the Incorrect Statement</h1>

      {quizSets.map((set, setIndex) => (
        <div key={setIndex} style={{ marginBottom: 20 }}>
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
                  style={{ marginRight: 8 }}
                  disabled={score !== null} // disable radio after submitting
                />
                {statement}
              </label>
            </div>
          ))}
        </div>
      ))}

      {score === null ? (
        <button onClick={handleSubmit} style={{ marginRight: 10 }}>
          Submit
        </button>
      ) : (
        <>
          <p>
            Your score: {score} / {quizSets.length}
          </p>
          <button onClick={resetQuiz}>Try Again</button>
        </>
      )}
    </div>
  );
}