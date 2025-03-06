import Image from "next/image";
import Linkdin from "../../../public/img/linkdin.png";
import Git from "../../../public/img/github.png";
import arrow from "../../../public/img/ArrowUpRight.png";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <h2 className="text-quinary text-[20px] font-primary"> Contato</h2>
        <p className="text-tercery text-[26px] font-tercery font-bold">
          Gostou do meu trabalho?
        </p>
        <p className="text-secondary text-[16px] font-segundary">
          Fique à vontade para entrar em contato ou acompanhar minhas redes
          sociais!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <a
          href="https://www.linkedin.com/in/felipe-assis-de-jesus-a981bb117/"
          target="_blank"
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <div className="w-[400px] flex justify-between items-center gap-4 border border-secondary rounded-[10px] px-3 mt-4 bg-bgPrimary">
            <div className="flex justify-center items-center gap-4  p-4">
              <Image src={Linkdin} alt="Linkdin" />
              <p className="text-secondary text-[16px] font-segundary">
                Linkdin
              </p>
            </div>
            <div>
              <Image src={arrow} alt="Arrow" />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/lipeA"
          target="_blank"
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <div className="w-[400px] flex justify-between items-center gap-4 border border-secondary rounded-[10px] px-3 mt-4 bg-bgPrimary">
            <div className="flex justify-center items-center gap-4  p-4">
              <Image src={Git} alt="Linkdin" className="-ml-1" />
              <p className="text-secondary text-[16px] font-segundary ">
                Github
              </p>
            </div>
            <div>
              <Image src={arrow} alt="Arrow" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
