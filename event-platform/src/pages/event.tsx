import { isPast } from "date-fns";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Loading } from "../components/loading";
import { Sidebar } from "../components/sidebar";
import { Video } from "../components/video";
import { Welcome } from "../components/welcome";
import { useGetLessonsQuery } from "../graphql/generated";

export function Event() {
  const navigate = useNavigate();

  const { slug } = useParams<{ slug: string }>();

  const { data } = useGetLessonsQuery();

  const isPastAvailableAt = data?.lessons.find((item) => isPast(new Date(item.availableAt)));

  useEffect(() => {
    if (!!isPastAvailableAt) {
      navigate(`/event/lesson/${isPastAvailableAt?.slug}`);
    }
  }, [isPastAvailableAt]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex md:flex-row flex-col-reverse">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex md:flex-row flex-1 flex-col-reserve align-center">
            <Welcome />
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
