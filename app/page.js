import Image from "next/image";
import { fetchAnime } from "./action";
import Loadmore from "@/components/Loadmore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaStar, FaPlay, FaTv } from "react-icons/fa";
import { MdMovie, MdOutlineSubtitles } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <>
      <main className="min-h-screen bg-gray-50 md:mt-16 mt-20">
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FaTv className="text-blue-600 text-2xl" />
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Free Streaming</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Watch Anime Dubbed Online Free
                </h1>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Looking to watch cartoons online anime english dub? You've found the right place. 
                  Stream your favorite dubbed anime series with high-quality video and audio. 
                  From classic shows to the latest releases, watch anime dub episodes completely free.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                    <MdOutlineSubtitles className="text-gray-600" />
                    <span className="text-sm text-gray-700">English Dubbed</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                    <BiCameraMovie className="text-gray-600" />
                    <span className="text-sm text-gray-700">HD Quality</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                    <FaPlay className="text-gray-600" />
                    <span className="text-sm text-gray-700">Instant Streaming</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <MdMovie className="text-blue-600 text-8xl md:text-9xl opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1000+</div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">Anime Series</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Description */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            Our platform makes it easy to watch cartoons online anime dubbed in English. 
            Whether you're searching for "watch cartoons online english dub anime" or "anime watch cartoon online," 
            we've got thousands of dubbed anime episodes ready to stream. 
            Browse popular titles, discover new series, and watch cartoons online watch anime dub without any hassle.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 anime-title">Popular Dubbed Anime</h2>
        </div>

        <div className="grid gridd gap-4 p-4">
        {data.map((item, index) => (
          <div
            key={`anime-${item.id}-${index}`}
            className="group  transition-transform duration-300 bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm h-[420px] flex flex-col"
          >
            <div className="relative h-64 flex-shrink-0">
              <Image
                className="w-full h-full object-cover object-top"
                src={`https://shikimori.one${item.image.original}`}
                alt={item.name}
                width={400}
                height={300}
              />
              <div className="absolute top-2 right-2 flex items-center gap-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                <FaStar className="text-yellow-800" /> {item.score}
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">
                {item.name}
              </h2>
              <div className="flex gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {item.kind}
                </span>
              </div>
              <Link
                href={`/anime/${item.id}-${encodeURIComponent(item.name.replace(/\s+/g, '-'))}`}
              >
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors mt-auto">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
        </div>
      </main>
      <Loadmore />
      <Footer />
    </>
  );
}
