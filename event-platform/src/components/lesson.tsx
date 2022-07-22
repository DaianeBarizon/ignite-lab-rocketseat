import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
};

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de' MMMM ' •' k'h'mm", { locale: ptBR });
  const isActiveLesson = slug === props.slug;

  return (
    <Link
      to={isLessonAvailable ? `/event/lesson/${props.slug}` : "#"}
      className={isLessonAvailable ? "group" : "pointer-events-none"}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={`rounded border border-gray-500 p-4 my-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs text-white font-bold rounded py-[0.125rem] px-2 border ${
              isLessonAvailable ? "border-green-300" : " border-gray-300"
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
