"use client";

import React, { useEffect, useState } from "react";

function HomeContent() {
  const text = "Welcome to Agnesa's Portfolio";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;

        if (i === text.length) {
          clearInterval(typingInterval);

          setTimeout(() => {
            i = 0;
            setDisplayedText("");
            startTyping();
          }, 10000);
        }
      }, 120);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  const topImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
  ];

  const bottomImages = [
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
  ];

  return (
    <div style={styles.container}>
      

      <div style={styles.row}>
        {topImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="img"
            style={styles.image}
            className="hover-img"
          />
        ))}
      </div>

     
      <div style={styles.box}>
        <h2 style={styles.text}>
          {displayedText}
          <span style={styles.cursor}></span>
        </h2>
      </div>

      
      <div style={styles.row}>
        {bottomImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="img"
            style={styles.image}
            className="hover-img"
          />
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },

  row: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  box: {
    backgroundColor: "#203354",
    height: "420px",       
    width: "900px",         
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)", // ✨ subtle glow
  },

  text: {
    color: "white",
    fontSize: "60px",       
    fontFamily: "monospace",
    textAlign: "center",
  },

  cursor: {
    borderRight: "3px solid white",
    marginLeft: "6px",
  },

  image: {
    width: "180px",         
    height: "180px",
    objectFit: "cover",
    borderRadius: "25px",
  },
};

export default HomeContent;