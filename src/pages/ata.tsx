import Head from 'next/head';
import arquivos from '../services/arquivos';
import styles from '../styles/Instituicao.module.scss'

function Ata() {
  return (
    <>
      <Head>
        <title>APGEA | Ata</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h1>Ata</h1>

          <div className={styles.fieldDoc}>
            <iframe src={arquivos.find(i => i.nome === "ata")?.arquivo} width="100%" height="100%"></iframe>
          </div>
          
          <img src="/logo.png" alt="logomarca" />
        </div>
      </div>
    </>
  )
}

export default Ata;
