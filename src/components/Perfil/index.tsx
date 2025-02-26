"use cleint";
import Image from "next/image";
import styled from "./perfil.module.css";

export default function Perfil() {
  return (
    <div className={styled.container}>
      <div className={styled.perfilContent}>
        <Image
          src={"/img/03.jpg"}
          alt="Perfil"
          width={200}
          height={200}
          className={styled.perfil}
        />
      </div>
      <Image
        src={"/img/seo.png"}
        alt="tecnologia"
        width={30}
        height={30}
        className={styled.icon}
      />
    </div>
  );
}
