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
        <a target="_blank" href={pdf_teoria}>Teoria</a>
        <a target="_blank" href={pdf_pratica}>Prática</a>
      </div>
    </div>
  );
};

export { Projeto };
