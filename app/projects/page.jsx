"use client";

import React, { useState, useRef } from "react";

const projects = [
  {
    title: "Pantryful",
    role: "Full-Stack Developer",
    description:
      "Collaborated in a team of three to develop PantryFul, an AI-powered web application that helps users manage pantry inventory and generate meal suggestions based on available ingredients.",
    tools: ["Python", "Streamlit", "Google Gemini API"],
    github: "https://github.com/NSiddiqui226/Pantryful",
    bg: "#1a3a5c",
    accent: "#4a9edd",
    emoji: "🥘",
  },
  {
    title: "Baker Bike Heist",
    role: "Developer",
    description:
      "Built a multi-stage animated adventure game using Python and Turtle graphics. Implemented movement, collision detection, and boss mechanics.",
    tools: ["Python", "Turtle Graphics"],
    github: "https://github.com/agnesabekiri/Baker-Bike-Heist",
    bg: "#2d1a4a",
    accent: "#a06ee0",
    emoji: "🚲",
  },
  {
    title: "Louvre Escape",
    role: "Developer",
    description:
      "Console-based adventure game with timers, movement, hazards, and challenges built in Python.",
    tools: ["Python"],
    github: null,
    bg: "#1a3d2e",
    accent: "#4ec98a",
    emoji: "🏛️",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const timeoutRef = useRef(null);

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
      setDirection(null);
    }, 380);
  };

  const prev = () =>
    goTo((current - 1 + projects.length) % projects.length, "right");

  const next = () =>
    goTo((current + 1) % projects.length, "left");

  const project = projects[current];

  const slideStyle = animating
    ? {
        opacity: 0,
        transform:
          direction === "left"
            ? "translateX(-60px)"
            : "translateX(60px)",
      }
    : { opacity: 1, transform: "translateX(0)" };

  return (
    <div id="projects" style={styles.container}>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-in-left { animation: slideInLeft 0.38s ease forwards; }
        .slide-in-right { animation: slideInRight 0.38s ease forwards; }
        .arrow-btn:hover { opacity: 0.75; transform: scale(1.08); }
        .dot-btn:hover { transform: scale(1.3); }
        .gh-link:hover { opacity: 0.85; }
      `}</style>

      <h1 style={styles.title}>Projects</h1>

      <div style={styles.progressTrack}>
        <div
          style={{
            ...styles.progressBar,
            width: `${((current + 1) / projects.length) * 100}%`,
            backgroundColor: project.accent,
          }}
        />
      </div>

      <div style={styles.carouselWrapper}>
        <button
          className="arrow-btn"
          style={styles.arrow}
          onClick={prev}
        >
          ←
        </button>

        <div style={{ width: "100%", maxWidth: "620px", overflow: "hidden" }}>
          <div
            key={current}
            className={
              !animating
                ? direction === "left"
                  ? "slide-in-left"
                  : direction === "right"
                  ? "slide-in-right"
                  : ""
                : ""
            }
            style={{
              ...styles.card,
              backgroundColor: project.bg,
              ...(!animating ? {} : slideStyle),
            }}
          >
            <div style={styles.topRow}>
              <span style={{ ...styles.counter, color: project.accent }}>
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <span style={styles.emoji}>{project.emoji}</span>
            </div>

            <h2 style={styles.cardTitle}>{project.title}</h2>

            <span
              style={{
                ...styles.roleBadge,
                backgroundColor: project.accent + "33",
                color: project.accent,
              }}
            >
              {project.role}
            </span>

            <div
              style={{
                ...styles.divider,
                backgroundColor: project.accent + "44",
              }}
            />

            <p style={styles.description}>{project.description}</p>

            <div style={styles.toolsRow}>
              {project.tools.map((t) => (
                <span
                  key={t}
                  style={{
                    ...styles.toolTag,
                    borderColor: project.accent + "88",
                    color: project.accent,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                className="gh-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...styles.linkButton,
                  backgroundColor: project.accent,
                }}
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        <button
          className="arrow-btn"
          style={styles.arrow}
          onClick={next}
        >
          →
        </button>
      </div>

      <div style={styles.dots}>
        {projects.map((p, i) => (
          <button
            key={i}
            className="dot-btn"
            onClick={() =>
              goTo(i, i > current ? "left" : "right")
            }
            style={{
              ...styles.dot,
              backgroundColor: i === current ? p.accent : "#c5ccd8",
              transform: i === current ? "scale(1.25)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  title: {
  fontSize: "48px",
  marginBottom: "32px",
  color: "#203354",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'San Francisco', sans-serif",
  fontWeight: "600",
},
  progressTrack: {
    width: "100%",
    maxWidth: "620px",
    height: "3px",
    backgroundColor: "#eee",
    margin: "0 auto 40px",
  },
  progressBar: {
    height: "100%",
  },
  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  arrow: {
    background: "none",
    border: "1px solid black",
    cursor: "pointer",
    padding: "10px",
  },
  card: {
    padding: "30px",
    borderRadius: "20px",
    color: "white",
    minHeight: "300px",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  counter: {
    fontSize: "12px",
  },
  emoji: {
    fontSize: "24px",
  },
  cardTitle: {
    fontSize: "28px",
  },
  roleBadge: {
    padding: "5px 10px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "10px",
  },
  divider: {
    height: "1px",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    marginBottom: "15px",
  },
  toolsRow: {
    display: "flex",
    gap: "5px",
    flexWrap: "wrap",
    marginBottom: "15px",
  },
  toolTag: {
    border: "1px solid",
    padding: "3px 8px",
    borderRadius: "10px",
    fontSize: "12px",
  },
  linkButton: {
    padding: "8px 16px",
    borderRadius: "20px",
    color: "white",
    textDecoration: "none",
  },
  dots: {
    marginTop: "20px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "none",
    margin: "0 5px",
    cursor: "pointer",
  },
};