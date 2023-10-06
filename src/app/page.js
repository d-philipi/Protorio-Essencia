import styles from "../styles/pages/app.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.op1}>
          <h1>Opção 1</h1>
        </div>
        <div className={styles.op2}>
          <h1>Opção 2</h1>
        </div>
        <div className={styles.logo}>
        </div>
        <div className={styles.op3}>
          <h1>Opção 3</h1>
        </div>
        <div className={styles.op4}>
          <h1>Opção 4</h1>
        </div>
      </div>
      <div className={styles.imagem}>
        <h1>Imagem</h1>
      </div>
      <div className={styles.container}>
        <h1>Container</h1>
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
        <h1>Footer</h1>
      </div>
    </>
  );
}
