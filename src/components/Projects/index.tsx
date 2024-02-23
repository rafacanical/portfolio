import styles from './styles.module.css'

function Projects() {
  return (
    <div className={styles.container}>
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="https://parkourspotsbergen.vercel.app" target="_blank">
            Parkour Spots Bergen
          </a>
        </li>
        <li>
          <a href="https://github.com/rafacanical/propor" target="_blank">
            Propor
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Projects
