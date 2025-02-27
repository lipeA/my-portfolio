"use client";
import Perfil from "@/components/Perfil";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="header">
      <Perfil />
      <AboutMe welcome="Hello World! Meu nome é Felipe Assis e sou" />
    </div>
  );
}
