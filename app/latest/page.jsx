import Image from "next/image";
import { fetchAnime } from "../action";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { FaStar, FaClock } from "react-icons/fa";
import { MdNewReleases } from "react-icons/md";

export const metadata = {
  title: "Latest English Dub Episodes - New Anime Dubbed Episodes Free",
  description: "Watch the latest English dub anime episodes online free. Stream newest dubbed anime releases and recently added English dub episodes in HD quality.",
  keywords: ["latest english dub episodes", "new anime dubbed", "recent dub episodes", "newest anime english dub"],
};

export default async function LatestDubPage() {
  const data = await fetchAnime(1);

  return (
    <>
      <main className="min-h-screen bg-gray-50 md:mt-16 mt-20">
        <Navbar />
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Latest English Dub Episodes" }
        ]} />
        
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <MdNewReleases className="text-green-500 text-3xl" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 anime-title">
                Latest English Dub Episodes
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Stay up to date with the latest English dub anime episodes. 
              Watch newly released dubbed anime episodes as soon as they're available. 
              Stream the newest anime english dub content in high quality.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recently Added</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaClock className="text-green-500" />
              <span>Updated Daily</span>
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
                alt={`Watch ${item.name} Latest Episode Dubbed`}
                width={400}
                height={300}
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                ⭐ {item.score}
              </div>
              <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
                <MdNewReleases /> New
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
                  Watch Latest Episode
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
