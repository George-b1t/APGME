import { Projeto } from "../components/Projeto";
import styles from "../styles/Projetos.module.scss";

import projetos from "../services/projetos";

function Projetos() {
  return (
    <div className={styles.container}>
      <h1>Projetos</h1>

      <div className={styles.fieldProjetos}>
        {projetos.map((projeto, index) => (
          <Projeto key={index} nome={projeto.nome} pdf_pratica={projeto.pdf_pratica} pdf_teoria={projeto.pdf_teoria} />
        ))}
      </div>
    </div>
  )
};

export default Projetos;
