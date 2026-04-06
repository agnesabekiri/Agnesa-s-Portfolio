"use client";

import React, { useState } from 'react'

const Contact = () => {
  const [pressed, setPressed] = useState(null)

  return (
    <div id="contact" style={styles.container}>
      <h1 style={styles.title}>Contact Me</h1>

      <div style={styles.buttonRow}>
        <a
          href="mailto:agnesabeqiri13@outlook.com"
          style={{
            ...styles.button,
            transform: pressed === 'email' ? 'translateY(2px)' : 'translateY(0)',
          }}
          onMouseDown={() => setPressed('email')}
          onMouseUp={() => setPressed(null)}
        >
          Email ↗
        </a>

        <a
          href="https://www.linkedin.com/in/agnesabekirics"
          target="_blank"
          rel="noreferrer"
          style={{
            ...styles.button,
            transform: pressed === 'linkedin' ? 'translateY(2px)' : 'translateY(0)',
          }}
          onMouseDown={() => setPressed('linkedin')}
          onMouseUp={() => setPressed(null)}
        >
          LinkedIn ↗
        </a>


        <a
          href="https://github.com/agnesabekiri"
          target="_blank"
          rel="noreferrer"
          style={{
            ...styles.button,
            transform: pressed === 'github' ? 'translateY(2px)' : 'translateY(0)',
          }}
          onMouseDown={() => setPressed('github')}
          onMouseUp={() => setPressed(null)}
        >
          GitHub ↗
        </a>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'serif',
    color:"#203354",
  },
  title: {
    fontSize: '60px',
    marginBottom: '40px',
  },
  buttonRow: {
    display: 'flex',
    gap: '40px',
  },
  button: {
    textDecoration: 'none',
    padding: '15px 40px',
    borderRadius: '50px',
    border: '1px solid navy',
    color: 'navy',
    textAlign: 'center',
    transition: 'all 0.15s ease',
  },
  
}

export default Contact