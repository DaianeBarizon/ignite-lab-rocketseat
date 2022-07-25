import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Video } from "../components/video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex md:flex-row flex-col-reverse">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex md:flex-row flex-1 flex-col-reserve align-center">
            <img src="/src/assets/image/wallpaper.png" alt="background" />
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
