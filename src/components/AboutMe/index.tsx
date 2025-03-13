"use client";
import { useState, useEffect } from "react";
import SoftSkills from "../SoftSkills";

import IconeHtml from "../../../public/img/iconeHTML.png";
import IconeReact from "../../../public/img/iconeReact.png";
import IconeReactNative from "../../../public/img/react-native.png";
import IconeType from "../../../public/img/iconeType.png";
import IconeCss from "../../../public/img/iconeCss.png";
import IconePhp from "../../../public/img/php.png";
import IconeGit from "../../../public/img/git.png";
import IconeLaravel from "../../../public/img/laravel.svg";

interface AboutMeProps {
  welcome: string;
}

export default function AboutMe({ welcome }: AboutMeProps) {
  const [welcomeText, setWelcomeText] = useState("");

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
        setTimeout(() => erase(), 1000);
      }
    };

    const erase = () => {
      if (i >= 0) {
        setText(text.slice(0, i));
        i--;
        setTimeout(erase, eraseDelay);
      } else if (callback) {
        setTimeout(callback, 500);
      }
    };

    type();
  };

  useEffect(() => {
    const loop = () => {
      typeWriter(welcome, setWelcomeText, 100, 40, () => {
        typeWriter(welcome, setWelcomeText, 100, 50, loop);
      });
    };

    loop();

    return () => {
      setWelcomeText("");
    };
  }, [welcome]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full mt-4 h-[220px]">
        <p className="text-secondary h-[30px] font-primary">{welcomeText}</p>
        <h1 className="font-tercery text-tercery text-[56px] max-md:text-[40px] max-md:w-full px-3 text-center">
          Desenvolvedor Fullstack
        </h1>
        <p className="font-segundary text-quaternary text-[14px] w-[680px] text-center max-md:w-full px-3">
          Minha paixão pela tecnologia me impulsiona a desenvolver sistemas
          inovadores, criando aplicações funcionais que resolvem desafios
          complexos com criatividade e precisão.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-full mt-8 gap-5 max-md:grid max-md:grid-cols-2 max-md:gap-3">
        <SoftSkills titulo="HTML" iconeSoft={IconeHtml} />
        <SoftSkills titulo="CSS" iconeSoft={IconeCss} />
        <SoftSkills titulo="TYPESCRIPT" iconeSoft={IconeType} />
        <SoftSkills titulo="PHP" iconeSoft={IconePhp} />
        <SoftSkills titulo="GIT" iconeSoft={IconeGit} />
        <SoftSkills titulo="REACT" iconeSoft={IconeReact} />
        <SoftSkills titulo="REACT NATIVE" iconeSoft={IconeReactNative} />
        <SoftSkills titulo="LARAVEL" iconeSoft={IconeLaravel} />
      </div>
    </div>
  );
}
