"use client";
import Image from "next/image";
import styled from "./styled.module.css";

interface SoftSkillsProps {
  iconeSoft: string | any;
  titulo: string;
}

export default function SoftSkills({ iconeSoft, titulo }: SoftSkillsProps) {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-full bg-bgPrimary">
      <Image
        src={iconeSoft}
        alt="Imagem dinâmica"
        width={20}
        height={20}
        unoptimized
      />

      <h3 className={styled.softName}>{titulo}</h3>
    </div>
  );
}
