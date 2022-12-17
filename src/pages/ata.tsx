import styles from '../styles/Instituicao.module.scss'

function Ata() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Ata</h1>

        <div className={styles.fieldDoc}>
          <img src="estatuto.jpg" alt="Estatuto" />
          <img src="estatuto.jpg" alt="Estatuto" />
        </div>
      </div>
    </div>
  )
}

export default Ata;
