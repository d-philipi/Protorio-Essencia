"use client";

import NavegationMobile from "./components/NavegationMobile";
import Container from "./components/Container";
import Navegation from "./components/Navegation";
import Footer from "./components/Footer";
import Image from "./components/Image";

export default function Home() {

  return (
    <>
      <NavegationMobile/>
      <Navegation/>
      <Image/>
      <Container/>
      <Footer/>
    </>
  );
}
