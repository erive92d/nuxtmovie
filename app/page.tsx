import NowPlaying from "@/components/Home/NowPlaying";
import Search from "@/components/Nav/Search/Search";
import { MovieProps } from "@/lib/globalProps";
import { getTrendingMovie } from "@/lib/movieApi";

export default async function Home() {
  return (
    <div className="px-6 py-10 relative">
      <Search />
      <NowPlaying />
    </div>
  );
}
