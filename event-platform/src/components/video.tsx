import { track } from "@amplitude/analytics-browser";
import { CaretRight, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Footer } from "./footer";
import { Loading } from "./loading";

type VideoProps = {
  lessonSlug: string;
};

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="p-6 h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.lesson.videoId}`}></iframe>
        </div>
      </div>

      <div className="p-6 max-w-[1100px] mx-auto ">
        <div className="lg:flex items-start gap-16 ">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-justify">{data.lesson.description}</p>

            {data.lesson.teacher && (
              <div className="lg:flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 my-3 mr-2 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="avatar"
                />

                <div className="leading-relaxed my-3">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => track("Button Click", { name: "Comunidade" })}
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </button>
            <button
              onClick={() => track("Button Click", { name: "Desafio" })}
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </button>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-1 lg:grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <ImageSquare size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}
