import Card from "../Card";
import Image from "../../../public/img/image 2.png";
import Inhere from "../../../public/img/inhere.jpg";
export default function ProjectsSection() {
  return (
    <div className=" w-full flex flex-col justify-center items-center p-10 max-md:overflow-x-hidden  max-md:p-1 max-md:mt-10 max-md:pb-28">
      <div>
        <h4 className="w-full text-primary text-[20px] flex justify-center items-center font-primary">
          Meu trabalho
        </h4>
        <h2 className="w-full text-tercery text-[24px] font-tercery flex justify-center items-center max-md:text-[21px]">
          Veja os projetos em destaques
        </h2>
      </div>
      <div className="w-[1040px] h-[584px] justify-center items-center grid grid-cols-3 gap-4 mt-9  max-md:flex  max-md:flex-col max-md:h-fit max-md:justify-start max-md:pl-2 max-md:w-full">
        <Card
          image={Inhere}
          title=" app em React Native para gerenciar participantes"
          text="No processo, trabalhei com useState, FlatList, Alert e outros componentes do próprio React Native, buscando deixar a interface limpa e intuitiva"
        />
        <Card
          image={Image}
          title="Projeto 01"
          text="informações sobre o projeto "
        />
        <Card
          image={Image}
          title="Projeto 01"
          text="informações sobre o projeto "
        />
        <Card
          image={Image}
          title="Projeto 01"
          text="informações sobre o projeto "
        />
        <Card
          image={Image}
          title="Projeto 01"
          text="informações sobre o projeto "
        />
      </div>
    </div>
  );
}
