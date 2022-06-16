import React from 'react'
import Logo from './Logo'

function HomeHeader() {
  return (
    <header style={{ paddingTop: 20, position: 'relative' }}>
      <h1>
        <Logo />
      </h1>
      <div style={{ position: 'absolute', bottom: -60, left: 0, right: 0, textAlign: 'center' }}>
        <img src="/assets/jumping.png" alt="Jumping" />
      </div>
    </header>
  )
}

export default HomeHeader
