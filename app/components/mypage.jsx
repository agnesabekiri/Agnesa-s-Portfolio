import React from "react";

function HomeContent() {
  return (
    <div>
      <header>
        <h1>My Home Page</h1>
      </header>

      <div>
        <p>
          This is my portfolio. A little bit about me: I'm a Freshman at UIC majoring in Computer Science.
        </p>

        <img
          src="/globe.svg"
          alt="Globe"
          width={300}
        />
      </div>
    </div>
  );
}

export default HomeContent;