import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  text: string;
  image: string | StaticImageData;
}

export default function Card({ image, title, text }: CardProps) {
  return (
    <>
      <a href="#" className="hover:scale-105 transition-transform duration-300">
        <div className="bg-bgPrimary w-[330px] h-[280px] rounded-md p-3">
          <div className="w-full h-[150px] bg-gray-300 rounded-t-md ">
            <Image src={image} alt="Imagem do projeto" />
          </div>
          <div className="mt-5 ml-1 flex flex-col items-start">
            <h3 className="text-tercery font-bold text-[16px]">{title}</h3>
            <p className="text-[14px] text-secondary ">{text}</p>
          </div>
        </div>
      </a>
    </>
  );
}
