import React from "react";
import Header from "../components/Header";
import Quiz from "../components/Quiz";

/**
 * Main landing page for your Next.js app.
 * Displays the HumanoidAI-style header and the quiz below it.
 */
export default function Home() {
  return (
    <>
      <Header />
      <Quiz />
    </>
  );
}