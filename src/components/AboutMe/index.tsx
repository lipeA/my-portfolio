"use client";
import styled from "./styled.module.css";

export default function AboutMe() {
  return (
    <div className={styled.aboutMeContainer}>
      <p className={styled.welcome}>
        Hello World! Meu nome é{" "}
        <span className={styled.name}> Felipe Assis </span> e sou
      </p>
      <h1 className={styled.title}>Desenvolvedor Fullstack</h1>
      <p className={styled.description}>
        Minha paixão pela tecnologia me impulsiona a desenvolver sistemas
        inovadores, criando aplicações funcionais que resolvem desafios
        complexos com criatividade e precisão.
      </p>
    </div>
  );
}
