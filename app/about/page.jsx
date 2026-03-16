import React from 'react';

const About = () => {
  return (
    <div id="about">

      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#203354",
          margin: "60px 0"
        }}
      />

      <h1 style={{ textAlign: "center", fontSize: "65px", fontFamily: "serif" }}>
        About me
      </h1>

      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "40px auto",
         
        }}
      >

        {/* navy box */}
        <div
          style={{
            backgroundColor: "#203354",
            color: "white",
            padding: "40px",
            borderRadius: "12px",
            width: "500px",
            fontSize: "16px",
            fontFamily: "serif",
            lineHeight: "1.6"
          }}
        >
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
        

        <div style={{backgroundColor:"#203354", padding:"20px", borderRadius:"16px", width:"350px",display:"flex",justifyContetent:"center", alignItems:"center"}}> 
          <img 
            src="/myself.JPG"
            alt="Agnesa"
            style={{
              width:"100%",
              borderRadius:"12px",
              objectFit: "cover"
            }}
            />


        </div>
      </div>

    </div>
  );
}

export default About;