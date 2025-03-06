import Image from "next/image";
import PC from "../../../public/img/PC.png";
import Serve from "../../../public/img/SERVE.png";
export default function MyServices() {
  return (
    <>
      <div className="w-full h-[480px] flex justify-center items-center flex-col bg-bgTertiary">
        <div>
          <h1 className="text-[18px] text-primary font-segundary">
            Meus Serviços
          </h1>
        </div>

        <div className="flex justify-center items-center gap-10 mt-10">
          <div className="flex flex-col justify-center items-start gap-5 mt-10 border border-tercery p-5 rounded-lg">
            <div>
              <Image src={PC} alt="PC" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[16px] text-tercery font-tercery font-bold">
                Desenvolvimento Web
              </h2>
              <p className="text-[14px] text-secondary font-tercery">
                Desenvolvimento de sites responsivos, dinâmicos e modernos.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-5 mt-10 border border-tercery p-5 rounded-lg">
            <div>
              <Image src={Serve} alt="PC" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[16px] text-tercery font-tercery font-bold">
                API e banco de dados
              </h2>
              <p className="text-[14px] text-secondary font-tercery">
                Criação de serviços do sistema e banco de dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
