"use client";

import React, { useState } from "react";

const Projects = () => {
  const [showPantry, setShowPantry] = useState(false);
  const [showBike, setShowBike] = useState(false);
  const [showLouvre, setShowLouvre] = useState(false);

  return (
    <div id="projects" style={styles.container}>
      <h1 style={styles.title}>Projects</h1>

      <div style={styles.columns}>
        
        {/* Pantryful */}
        <div style={styles.column}>
          <button style={styles.button} onClick={() => setShowPantry(!showPantry)}>
            Pantryful
          </button>

          {showPantry && (
            <div style={styles.card}>
              <h2 style={styles.heading}>Pantryful</h2>
              <hr style={styles.line} />
              <p style={styles.center}><b>Role:</b> Full-Stack Developer</p>
              <p style={styles.center}><b>Project Experience:</b></p>
              <p style={styles.text}>
                Collaborated in a team of three to develop PantryFul, an AI-powered web application that helps users manage pantry inventory and generate meal suggestions based on available ingredients. Built backend functionality using Python and integrated Google Gemini API to deliver intelligent recommendations. Developed a frontend with Streamlit for a user-friendly experience.
              </p>
              <p style={styles.center}><b>Tools Used:</b></p>
              <p style={styles.center}>Python, Streamlit, Google Gemini API</p>

              <a
                href="https://github.com/NSiddiqui226/Pantryful"
                target="_blank"
                rel="noreferrer"
                style={styles.linkButton}
              >
                GitHub Link ↗
              </a>
            </div>
          )}
        </div>

        {/* Baker Bike Heist */}
        <div style={styles.column}>
          <button style={styles.button} onClick={() => setShowBike(!showBike)}>
            Baker Bike Heist
          </button>

          {showBike && (
            <div style={styles.card}>
              <h2 style={styles.heading}>Baker Bike Heist</h2>
              <hr style={styles.line} />
              <p style={styles.center}><b>Role:</b> Developer</p>
              <p style={styles.center}><b>Project Experience:</b></p>
              <p style={styles.text}>
                Collaborated with a team of three to design and develop a multi-stage animated adventure game using Python and Turtle graphics. Built gameplay systems including movement, collision detection, and boss fight mechanics. Won 1st place in class for best gameplay design.
              </p>
              <p style={styles.center}><b>Tools Used:</b></p>
              <p style={styles.center}>Python, Turtle Graphics</p>

              <a
                href="https://github.com/agnesabekiri/Baker-Bike-Heist"
                target="_blank"
                rel="noreferrer"
                style={styles.linkButton}
              >
                GitHub Link ↗
              </a>
            </div>
          )}
        </div>

        {/* Louvre Escape */}
        <div style={styles.column}>
          <button style={styles.button} onClick={() => setShowLouvre(!showLouvre)}>
            Louvre Escape
          </button>

          {showLouvre && (
            <div style={styles.card}>
              <h2 style={styles.heading}>Louvre Escape</h2>
              <hr style={styles.line} />
              <p style={styles.center}><b>Role:</b> Developer</p>
              <p style={styles.center}><b>Project Experience:</b></p>
              <p style={styles.text}>
                Developed a console-based adventure game where players navigate a virtual museum under a countdown timer. Built modular mechanics including movement, item collection, hazards, and challenges using Python.
              </p>
              <p style={styles.center}><b>Tools Used:</b></p>
              <p style={styles.center}>Python</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 20px",
    fontFamily: "Georgia, serif",
    textAlign: "center",
    color: "#203354",
  },
  title: {
    fontSize: "65px",
    marginBottom: "60px",
  },
  columns: {
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
  },
  column: {
    width: "33%",
  },
  button: {
    width: "100%",
    padding: "18px",
    borderRadius: "40px",
    border: "none",
    backgroundColor: "#203354",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#203354",
  },
  line: {
    margin: "10px 0 20px 0",
  },
  center: {
    textAlign: "center",
    marginBottom: "10px",
  },
  text: {
    textAlign: "center",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  linkButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "400",
    borderRadius: "30px",
    backgroundColor: "#203354",
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
  },
};

export default Projects;