import Card from "../Card";
import Image from "../../../public/img/image 2.png";
export default function ProjectsSection() {
  return (
    <div className=" w-full flex flex-col justify-center items-center p-10">
      <div>
        <h4 className="w-full text-primary text-[20px] flex justify-center items-center font-primary">
          Meu trabalho
        </h4>
        <h2 className="w-full text-tercery text-[24px] font-tercery flex justify-center items-center">
          Veja os projetos em destaques
        </h2>
      </div>
      <div className="w-[1040px] h-[584px] flex justify-center items-center grid grid-cols-3 gap-4 mt-9">
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
        <Card
          image={Image}
          title="Projeto 01"
          text="informações sobre o projeto "
        />
      </div>
    </div>
  );
}
