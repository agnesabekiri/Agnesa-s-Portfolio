import React from "react";
import Navbar from "../components/navbar";

const Experience = () => {
    return(
        <div> 
        <Navbar />

        <h1 style={{textAlign:"center", fontSize:"60px", fontFamily:"serif"}}>
            Experience
        </h1>
        <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontFamily: "serif",
          fontSize: "16px",
          lineHeight: "1.5"
        }}
      >
        <p><strong>IT Intern</strong></p>

        <p>
          Rolling Meadows City Hall – Information Technology Department
        </p>

        <p>
          <strong>Role:</strong> IT Intern
        </p>

        <p>
          Provided technical support to the City Hall IT department by
          configuring and deploying devices, maintaining network stability,
          and organizing IT infrastructure. Assisted with telecom room
          upgrades, including cable management and hardware optimization,
          improving system performance and accessibility for staff across
          multiple departments, including Police and Fire.
        </p>

        <p>
          <strong>Tools Used:</strong>
        </p>

        <p>
          Networking hardware, iPads, telecom systems, device configuration,
          cable management, basic IT troubleshooting
        </p>

      </div>

    </div>
        
    
    );
}
export default Experience;