import React from "react";
import Image from "next/image";
import styles from "../styles/Quiz.module.css";

/**
 * Basic Header with the HumanoidAI logo and a hamburger menu icon.
 * Replace `href` with your actual links or Next.js <Link> components
 * if you want to navigate to other pages.
 */
export default function Header() {
  const handleMenuClick = () => {
    alert("Hamburger menu clicked! Implement your own menu logic here.");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        {/* Logo from /public/humanoidai-logo.png */}
        <Image
          src="/humanoidai-logo.png"
          alt="HumanoidAI Logo"
          width={150}
          height={30}
          priority
        />
      </div>

      <div className={styles.headerRight}>
        <button onClick={handleMenuClick} className={styles.hamburgerBtn}>
          <span className={styles.hamburgerIcon}>&#9776;</span>
        </button>
      </div>
    </header>
  );
}