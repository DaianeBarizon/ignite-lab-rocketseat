import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./lesson";
import { Loading } from "./loading";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen w-screen md:w-[348px] bg-gradient-to-b from-gray-600 to-fray-700">
        <Loading />
      </div>
    );
  }

  return (
    <aside className="md:w-[348px] bg-gradient-to-b from-gray-600 to-fray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronogramas das aulas</span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
