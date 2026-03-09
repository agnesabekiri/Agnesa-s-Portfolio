import React from 'react';
import Navbar from "../components/navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{textAlign:"center", fontSize: "60px",fontFamily:"serif"}}>
        About me
      </h1>
      <div style={{fontSize:"16px", fontFamily:"serif"}}>
        <p>
          Hi! I’m Agnesa Bekiri, a freshman at the University of Illinois
          Chicago studying Computer Science. I’m passionate about building
          creative and functional tech projects, from Python adventure games
          like Baker Bike Heist and Louvre Escape: The Mona Lisa Challenge to
          AI-powered web projects like PantryFu, which I developed during
          SparkHacks.
        </p>
        <p>
          I’ve gained hands-on experience through solo and group projects,
          hackathons, and internships, including an IT internship at Rolling
          Meadows City Hall, where I worked on networking, device setup, and
          system organization.
        </p>
        <p>
          I also participate in mentorship and leadership programs, such as
          the WiCS Mentorship Program, where I work with an experienced mentor
          to plan my future in tech, and WiCS Dev Project, where I’m
          collaborating with club members to develop a portfolio website.
        </p>
        <p>
          I’m especially interested in full-stack development, AI
          applications, and ethical hacking, and I enjoy combining creativity
          with technical problem-solving to build tools and experiences that
          make an impact.
        </p>
      </div>
    </div>
  );
}

export default About