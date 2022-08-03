import { Horse, Cube, Heart } from "phosphor-react";
import { Footer } from "./footer";

const arrayMethods = [
  {
    icon: <Cube size={40} />,
    title: "Foco",
    description:
      "Programação é um universo infinito, logo ter foco é essencial. Nós vamos direto ao ponto no que realmente importa para você dominar as ferramentas, não apenas conhecê-las.",
  },
  {
    icon: <Horse size={40} />,
    title: "Prática",
    description:
      "A programação é uma disciplina prática. São as horas de código que vão te preparar e dar a experiência necessária para tomar as melhores decisões no mundo real.",
  },
  {
    icon: <Heart size={40} />,
    title: "Grupo",
    description:
      "A conexão entre Devs impulsiona seu repertório técnico, suas habilidades comportamentais e sua rede de contatos. Além de ajudar a assimilar e fixar todo aprendizado.",
  },
];

export function Welcome() {
  return (
    <div className="flex-1">
      <div className="p-6 max-w-[1100px] mx-auto">
        <div className="lg:flex justify-center items-center p-6">
          <img src="/src/assets/image/astronauts.svg" alt="astronauts" className="p-6" />
          <div className="p-6">
            <h1 className="text-5xl font-bold ">
              Bem vindo(a), ao programa de especialização para acelerar sua carreira
            </h1>
            <div className="flex">
              <p className="mt-4 p-2 text-orange-300 leading-relaxed rounded border border-orange-300">
                Confira em breve nossos conteúdos!
              </p>
            </div>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-1 lg:grid-cols-3">
          {arrayMethods.map((element) => {
            return (
              <a
                href="#"
                className="bg-gray-600 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
              >
                <div className="bg-green-700 h-full p-6 flex items-center">{element.icon}</div>
                <div className="py-6 leading-relaxed">
                  <strong className="text-2xl">{element.title}</strong>
                  <p className="text-sm text-gray-200 mt-2 mr-2">{element.description}</p>
                </div>
              </a>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}
