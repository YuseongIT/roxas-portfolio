// src/LandingPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const publicUrl = process.env.PUBLIC_URL || "";

const totalImages = 10;
const backgrounds = Array.from({ length: totalImages }, (_, i) =>
  `${publicUrl}/LandingPage/bg/${i + 1}.jpg`
);

const fadeDuration = 1.5;
const displayDuration = 4;

export default function LandingPage() {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();

  // 🕒 Cycle backgrounds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, displayDuration * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      {/* 🌄 Background Slideshow */}
      <AnimatePresence>
        <motion.div
          key={currentBg}
          className="background"
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration }}
        />
      </AnimatePresence>

      {/* 🌑 Overlay for dark tint */}
      <div className="overlay" />

      {/* ✨ Foreground Content */}
      <div className="content">
        {/* Greeting Image */}
        <motion.img
          src={`${publicUrl}/LandingPage/greeting.png`}
          alt="Greeting"
          className="greeting"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: 0.3,
          }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Intro Text */}
        <div className="intro-text">
          <p className="highlight">Hear ye! Hear ye!</p>
          <p>Gather ‘round, noble adventurers and curious wanderers alike!</p>
          <p>
            Before you lies the grand portfolio of <strong>John Ivan Roxas</strong>,
          </p>
          <p>
            Websmith of the Forgotten Realms, with the very weave at his fingertips.
          </p>
          <p>Within these enchanted maps you shall find his wondrous creations.</p>
          <p>From projects forged in the fires of VSCode and Windsurf,</p>
          <p>And arcane experiences that befall this humble IT scholar.</p>

          <p className="highlight">
            Step forth, brave soul… and may your journey through this map of wisdom be fruitful!
          </p>
        </div>

        {/* Enter Button */}
        <motion.button
          className="enter-button"
          onClick={() => navigate("/home")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,215,0,0.7)" }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Portfolio
        </motion.button>
      </div>
    </div>
  );
}
