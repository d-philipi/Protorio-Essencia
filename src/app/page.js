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
        <div className={styles.info}>

        </div>
        <div className={styles.info}>

        </div>
        <div className={styles.info}>

        </div>
        <div className={styles.info}>

        </div>
        <div className={styles.info}>

        </div>
      </div>
    </>
  );
}
