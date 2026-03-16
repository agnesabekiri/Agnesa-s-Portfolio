"use client";

import React, { useState } from "react";

const Projects = () => {

  const [showPantry, setShowPantry] = useState(false);
  const [showBike, setShowBike] = useState(false);
  const [showLouvre, setShowLouvre] = useState(false);

  return (
    <div id="projects">

      <hr style={{ boarder:"none", height: "2px", backgroundColor: "203354",margin:"60px 0"}}
      />

      <h1 style={{ textAlign: "center", fontSize: "65px", fontFamily: "serif" }}>
        Projects
      </h1>

      
      <div style={{ textAlign: "center", marginTop: "40px" }}>

        <button
          style={{ border: "2px solid black", padding: "10px", margin: "10px", borderRadius: "10px" }}
          onClick={() => setShowPantry(!showPantry)}
        >
          PantryFul
        </button>

        <button
          style={{ border: "2px solid black", padding: "10px", margin: "10px", borderRadius: "10px" }}
          onClick={() => setShowBike(!showBike)}
        >
          Baker Bike Heist
        </button>

        <button
          style={{ border: "2px solid black", padding: "10px", margin: "10px", borderRadius: "10px" }}
          onClick={() => setShowLouvre(!showLouvre)}
        >
          Louvre Escape
        </button>

      </div>

    
      {showPantry && (
        <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px", maxWidth: "600px", margin: "20px auto" }}>
          <h2>PantryFul</h2>
          <p><b>Role:</b> Full-Stack Developer</p>
          <p>AI web app that suggests meals based on pantry items.</p>
        </div>
      )}

     
      {showBike && (
        <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px", maxWidth: "600px", margin: "20px auto" }}>
          <h2>Baker Bike Heist</h2>
          <p><b>Role:</b> Game Developer</p>
          <p>Python Turtle adventure game with puzzles and boss fight.</p>
        </div>
      )}

     
      {showLouvre && (
        <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px", maxWidth: "600px", margin: "20px auto" }}>
          <h2>Louvre Escape</h2>
          <p><b>Role:</b> Developer</p>
          <p>Python puzzle game set in the Louvre museum.</p>
        </div>
      )}

    </div>
  );
};

export default Projects;