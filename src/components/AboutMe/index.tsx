"use client";
import { useState, useEffect } from "react";
import styled from "./styled.module.css";

interface AboutMeProps {
  welcome: string;
}

export default function AboutMe({ welcome }: AboutMeProps) {
  const fullText = "Hello World! Meu nome é Felipe Assis e sou";

  const [displayedText, setDisplayedText] = useState("");
  const [welcomeText, setWelcomeText] = useState("");

  // Função de digitação com opção de apagar
  const typeWriter = (
    text: string,
    setText: (value: string) => void,
    delay = 100,
    eraseDelay = 50,
    callback?: () => void
  ) => {
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        setText(text.slice(0, i));
        i++;
        setTimeout(type, delay);
      } else if (callback) {
        setTimeout(() => erase(), 1000); // Espera 1s antes de apagar
      }
    };

    const erase = () => {
      if (i >= 0) {
        setText(text.slice(0, i));
        i--;
        setTimeout(erase, eraseDelay);
      } else if (callback) {
        setTimeout(callback, 500); // Pequena pausa antes de repetir
      }
    };

    type();
  };

  useEffect(() => {
    const loop = () => {
      typeWriter(fullText, setDisplayedText, 80, 40, () => {
        typeWriter(welcome, setWelcomeText, 100, 50, loop);
      });
    };

    loop(); // Inicia o loop

    return () => {
      setDisplayedText("");
      setWelcomeText("");
    };
  }, [welcome]);

  return (
    <div className={styled.aboutMeContainer}>
      <p className={styled.welcome}>{displayedText}</p>
      <p className={styled.welcome}>{welcomeText}</p>
      <h1 className={styled.title}>Desenvolvedor Fullstack</h1>
      <p className={styled.description}>
        Minha paixão pela tecnologia me impulsiona a desenvolver sistemas
        inovadores, criando aplicações funcionais que resolvem desafios
        complexos com criatividade e precisão.
      </p>
    </div>
  );
}
