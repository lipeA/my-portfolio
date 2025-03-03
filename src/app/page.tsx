"use client";
import Perfil from "@/components/Perfil";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="w-full h-[750px] flex justify-center items-center flex-col bg-[url('/img/Background_Contacts.png')] bg-cover bg-center">
      <Perfil />
      <AboutMe welcome="Hello World! Meu nome é Felipe Assis e sou" />
    </div>
  );
}
