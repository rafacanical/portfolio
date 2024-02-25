import styles from './styles.module.css'

function Title() {
  return (
    <div className={styles.container}>
      <div className={styles.decoration}>I'm a developer</div>
      <h1 className={styles.title}>
        Rafa
        <br />
        Morais
      </h1>
    </div>
  )
}

export default Title
