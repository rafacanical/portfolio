import React from 'react'

function Header() {
  return (
    <>
      <header className="flex items-center justify-center">
        <img src="/assets/jumping.png" alt="Jumping" width="120px" />
        <div className="flex-1 ml-6">
          <h1 className="text-2xl text-gray-900 font-bold">Rafael Morais</h1>
          <h2 className="text-gray-600 -mt-2">Web Developer</h2>
        </div>
      </header>

      <nav className="border-y-2 py-2 mt-6 mb-8">
        <a href="/" className="mr-4 text-gray-600 text-sm font-medium hover:text-red-600">
          Home
        </a>
        <a href="/about" className="mr-4 text-gray-600 text-sm font-medium hover:text-red-600">
          About
        </a>
        <a href="/projects" className="mr-4 text-gray-600 text-sm font-medium hover:text-red-600">
          Projects
        </a>
        <a
          href="https://github.com/rafaelcanical"
          target="_blank"
          className="mr-4 text-gray-600 text-sm font-medium hover:text-red-600"
        >
          Github
        </a>
        <a
          href="https://twitter.com/rafaelcanical"
          target="_blank"
          className="text-gray-600 text-sm font-medium hover:text-red-600"
        >
          Twitter
        </a>
      </nav>
    </>
  )
}

export default Header
