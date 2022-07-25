import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./lesson";

const GET_LESSON_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

type GetLessonQueryResponse = {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
};

export function Sidebar() {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSON_QUERY);

  if (!data) {
    return <p>carregando...</p>;
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
