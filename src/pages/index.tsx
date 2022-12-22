import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>APGEA | Início</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Associação de Projetos de Gestão Pública, Meio Ambiente e Estruturas Acadêmicas...</h1>

        <h1 className={styles.subTitle}>APGEA</h1>
      </div>
    </>
  )
}
