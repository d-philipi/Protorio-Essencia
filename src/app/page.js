import styles from "../styles/pages/app.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.navegation}>
        <div className={styles.menu}>
          <div className={styles.op1}>
            <h1>História</h1>
          </div>
          <div className={styles.separador} />
          <div className={styles.op2}>
            <h1>Sobre</h1>
          </div>
          <div className={styles.logo}></div>
          <div className={styles.op3}>
            <h1>Doação</h1>
          </div>
          <div className={styles.separador} />
          <div className={styles.op4}>
            <h1>Contatos</h1>
          </div>
        </div>
      </div>
      <div className={styles.imagem}/>
      <div className={styles.container}>
        <div className={styles.anuncios}>
          <h1>Anúncios</h1>
        </div>
        <div className={styles.mensagens}>
          <h1>Mensagens</h1>
        </div>
        <div className={styles.ministerios}>
          <h1>Ministérios</h1>
        </div>
        <div className={styles.contatos}>
          <h1>Contatos</h1>
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.info}>
          <div className={styles.imagemFooter}/>
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
        <ul className={styles.info}>
          
        </ul>
      </div>
    </>
  );
}
