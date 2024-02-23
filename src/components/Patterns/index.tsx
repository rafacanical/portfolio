import styles from './styles.module.css'

function Patterns() {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div></div>
      </div>
      <div className={styles.middle}>
        <div></div>
      </div>
      <div className={styles.last}>
        <div className={styles.step1}></div>
        <div className={styles.step2}></div>
        <div className={styles.step3}></div>
        <div className={styles.step4}></div>
        <div className={styles.step5}></div>
      </div>
    </div>
  )
}

export default Patterns
