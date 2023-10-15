"use client";
import styles from "../styles/pages/app.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const data = [
    {
      id: 1,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
    {
      id: 2,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
    {
      id: 3,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
    {
      id: 4,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
    {
      id: 5,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
    {
      id: 6,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
    {
      id: 7,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
    {
      id: 8,
      image:
        "https://ticketgospel.com.br/wp-content/uploads/2023/09/BannerSiteTicket-Paulinia.png",
    },
  ];

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
      <div className={styles.imagem} />
      <div className={styles.container}>
        <div className={styles.anuncios}>
          <Swiper 
          slidesPerView={1}
          >
            {data.map((s) => (
              <SwiperSlide key={s.id}>
                <img
                  src={s.image}
                  alt="Slider"
                  className={styles.slideItemAnuncios}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.mensagens}>
          <h1>MENSAGENS</h1>
          <div className={styles.barra}/>
          <Swiper slidesPerView={4}>
            {data.map((s) => (
              <SwiperSlide key={s.id}>
                <img
                  src={s.image}
                  alt="Slider"
                  className={styles.slideItemMensagens}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.barra}/>
        </div>
        <div className={styles.ministerios}>
          <h1>MINISTÉRIOS</h1>
          <div className={styles.ministerioscontainer}>
            <div className={styles.ministerio}></div>
            <div className={styles.ministerio}></div>
            <div className={styles.ministerio}></div>
          </div>
          <div className={styles.ministerioscontainer}>
            <div className={styles.ministerio}></div>
            <div className={styles.ministerio}></div>
            <div className={styles.ministerio}></div>
          </div>
        </div>
        <div className={styles.information}>
          <div className={styles.comunhao}>
            <h1>COMUNHÃO</h1>
            <div className={styles.comu1}>
              <p>
                "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles."
              </p>
              <p>
                Mateus 18:20
              </p>
            </div>
            <div className={styles.comu2}>
              <div>
                <div className={styles.bairrobar}/>
                <h1>CASCADURA</h1>
              </div>
              <div>
                <div className={styles.ruabar}/>
                <p>Rua Barão do Bananal, 306 <br/> Rio de Janeiro</p>
              </div>
            </div>
          </div>
          <div className={styles.contatos}>
            <h1>CONTATOS</h1>
          </div>
        </div>
      </div>
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
    </>
  );
}
