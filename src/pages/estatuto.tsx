import arquivos from '../services/arquivos';
import styles from '../styles/Instituicao.module.scss'

function Estatuto() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Estatuto</h1>

        <div className={styles.fieldDoc}>
          <iframe src={arquivos.find(i => i.nome === "estatuto")?.arquivo} width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Estatuto;
