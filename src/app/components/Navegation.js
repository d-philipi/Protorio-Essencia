import styles from "../../styles/pages/app.module.css";

export default function Navegation() {
  return (
    <div className={styles.navegation}>
      <div className={styles.menu}>
        <div className={styles.op1}>
          <h1>História</h1>
        </div>
        <div className={styles.separador} />
        <div className={styles.op2}>
          <h1>Sobre</h1>
        </div>
        <div className={styles.logo} />
        <div className={styles.op3}>
          <h1>Doação</h1>
        </div>
        <div className={styles.separador} />
        <div className={styles.op4}>
          <h1>Contatos</h1>
        </div>
      </div>
    </div>
  );
}
