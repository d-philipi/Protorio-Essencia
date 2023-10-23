import styles from "../../styles/pages/app.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.info}>
        <div className={styles.imagemFooter} />
      </ul>
      <ul className={styles.info}>
        <li>
          <h2>História</h2>
        </li>
        <li>
          <h2>Liderança</h2>
        </li>
        <li>
          <h2>Houses</h2>
        </li>
        <li>
          <h2>Ministérios</h2>
        </li>
        <li>
          <h2>Agenda</h2>
        </li>
      </ul>
      <ul className={styles.info}>
        <li>
          <h1>Doação</h1>
        </li>
        <li>
          <h2>Banco</h2>
          <h2>Agência:</h2>
          <h2>Conta:</h2>
          <h2>CNPJ:</h2>
        </li>
        <li>
          <div className={styles.button}>Doação</div>
        </li>
        <li>
          <h1>Pix</h1>
        </li>
        <li>
          <h2>Chave:</h2>
          <h1>--</h1>
        </li>
      </ul>
      <ul className={styles.info}>
        <li>
          <h1>QrCode para Pix</h1>
        </li>
      </ul>
      <ul className={styles.info}></ul>
    </div>
  );
}
