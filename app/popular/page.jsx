import Image from "next/image";
import { fetchAnime } from "../action";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaStar, FaFire } from "react-icons/fa";

export const metadata = {
  title: "Popular Dubbed Anime - Watch Most Popular Anime English Dub Free",
  description: "Watch the most popular dubbed anime online free. Stream trending English dub anime series with high ratings. Discover popular anime dubbed in English.",
  keywords: ["popular dubbed anime", "trending anime dub", "popular anime english dub", "watch popular anime dubbed"],
};

export default async function PopularDubbedAnimePage() {
  const data = await fetchAnime(1);

  return (
    <>
      <main className="min-h-screen bg-gray-50 md:mt-16 mt-20">
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <FaFire className="text-orange-500 text-3xl" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 anime-title">
                Popular Dubbed Anime
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Discover the most popular dubbed anime series everyone is watching. 
              Stream trending English dub anime with high ratings and thousands of fans. 
              Watch popular anime dubbed in English with HD quality streaming.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaStar className="text-yellow-500" />
              <span>Sorted by Popularity</span>
            </div>
          </div>
        </div>

        <div className="grid gridd gap-4 p-4">
        {data.map((item, index) => (
          <div
            key={`anime-${item.id}-${index}`}
            className="group hover:scale-105 transition-transform duration-300 bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm h-[420px] flex flex-col"
          >
            <div className="relative h-64 flex-shrink-0">
              <Image
                className="w-full h-full object-cover object-top"
                src={`https://shikimori.one${item.image.original}`}
                alt={`Watch ${item.name} English Dubbed`}
                width={400}
                height={300}
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                ⭐ {item.score}
              </div>
              <div className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
                <FaFire /> Popular
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
                  Watch Dubbed
                </button>
              </Link>
            </div>
          </div>
        ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
