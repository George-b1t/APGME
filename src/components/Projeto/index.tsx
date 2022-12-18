import styles from "./styles.module.scss";

interface ProjetoProps {
  nome: string;
  pdf_teoria: string;
  pdf_pratica: string;
}

function Projeto({ nome, pdf_pratica, pdf_teoria }: ProjetoProps) {
  return (
    <div id={nome} className={styles.container}>
      <h1>{nome}</h1>

      <div className={styles.fieldButtons}>
        <button>Teoria</button>
        <button>Prática</button>
      </div>
    </div>
  );
};

export { Projeto };
