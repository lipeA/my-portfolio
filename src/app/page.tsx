"use client";
import Perfil from "@/components/Perfil";
import AboutMe from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import MyServices from "@/components/MyServices";
import Contact from "@/components/Contact";

import Image from "next/image";
import Arrow from "../../public/img/arrow.png";

export default function Home() {
  return (
    <>
      <div className="w-full h-[750px] flex justify-center items-center flex-col bg-[url('/img/Background_Contacts.png')] bg-cover bg-center">
        <Perfil />
        <AboutMe welcome="Hello World! Meu nome é Felipe Assis e sou" />
        <Image
          src={Arrow}
          alt="Arrow"
          className="w-10 h-10 animate-bounce mt-28 max-md:mt-10"
        />
      </div>
      <div className="w-full h-[750px] flex justify-center items-center flex-col bg-bgSecondary max-md:h-auto">
        <ProjectsSection />
      </div>
      <div>
        <MyServices />
      </div>
      <div className="w-full h-[750px] flex justify-center items-center flex-col bg-[url('/img/Background_Contacts.png')] bg-cover bg-center max-md:h-auto pt-10 pb-10">
        <Contact />
      </div>
    </>
  );
}
