import Image from "next/image";
import { fetchAnime } from "../action";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GiSwordman, GiPunch } from "react-icons/gi";

export const metadata = {
  title: "Action Anime Dubbed - Watch Action Anime English Dub Free",
  description: "Watch action anime dubbed online free. Stream the best action-packed English dub anime series. Fighting, adventure, and epic battles in HD quality.",
  keywords: ["action anime dubbed", "action anime english dub", "fighting anime dubbed", "adventure anime dub"],
};

export default async function ActionAnimePage() {
  const data = await fetchAnime(1);

  return (
    <>
      <main className="min-h-screen bg-gray-50 md:mt-16 mt-20">
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <GiSwordman className="text-red-600 text-3xl" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Action Anime Dubbed
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Watch the most intense action anime dubbed in English. 
              Stream epic fighting scenes, thrilling battles, and non-stop adventure. 
              Discover action-packed anime english dub series with incredible animations and martial arts.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Epic Action Series</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <GiPunch className="text-red-600" />
              <span>Action Category</span>
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
                alt={`Watch ${item.name} Action Anime Dubbed`}
                width={400}
                height={300}
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                ⭐ {item.score}
              </div>
              <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
                <GiSwordman /> Action
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
                  Watch Action Dubbed
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
