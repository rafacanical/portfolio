import React from 'react'

function Header() {
  return (
    <>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/assets/jumping.png" alt="Jumping" width="120px" />
        <div style={{ flex: 1, marginLeft: 20 }}>
          <h1 style={{ fontSize: 24, margin: 0, padding: 0, lineHeight: '24px' }}>Rafael Morais</h1>
          <h2 style={{ fontSize: 18, margin: 0, padding: 0, lineHeight: '18px' }}>Web Developer</h2>
        </div>
      </header>

      <br />
      <hr />
      <nav>
        <a href="/" style={{ marginRight: 10 }}>
          Home
        </a>
        <a href="/about" style={{ marginRight: 10 }}>
          About
        </a>
        <a href="/projects" style={{ marginRight: 10 }}>
          Projects
        </a>
        <a href="https://github.com/rafaelcanical" target="_blank" style={{ marginRight: 10 }}>
          Github
        </a>
        <a href="https://twitter.com/rafaelcanical" target="_blank" style={{ marginRight: 10 }}>
          Twitter
        </a>
      </nav>
      <hr />
      <br />
    </>
  )
}

export default Header
