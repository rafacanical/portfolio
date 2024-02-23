import Patterns from './components/Patterns'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Title from './components/Title'

function App() {
  return (
    <main>
      <div className="content">
        <div className="title-socials">
          <Title />
          <Socials />
        </div>

        <Projects />
      </div>

      <Patterns />
    </main>
  )
}

export default App
