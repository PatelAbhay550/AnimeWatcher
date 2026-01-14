import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay, FaStar, FaCalendar } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { MdMovie, MdOutlineSubtitles } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegCalendarTimes } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const animeName = decodeURIComponent(resolvedParams["anime-name"] || '');
  const animeData = await getAnimeData(resolvedParams["anime-name"]);
  
  const title = animeData 
    ? `Watch ${animeData.name} English Dubbed Online Free - ${animeData.kind} Anime` 
    : `Watch ${animeName} Anime Dubbed Online Free`;
  
  const description = animeData 
    ? `Watch ${animeData.name} dubbed anime online free. Stream all ${animeData.episodes || ''} episodes in English dub. ${animeData.kind} anime with ${animeData.score}/10 rating. Released ${animeData.released_on || 'TBA'}. Watch anime dubbed online with high quality streaming.`
    : `Watch ${animeName} anime english dubbed online. Stream dubbed anime episodes free in high quality.`;
  
  const imageUrl = animeData ? `https://shikimori.one${animeData.image.original}` : '';
  const url = `https://xanimewatcher.vercel.app/anime/${encodeURIComponent(animeName)}`;
  
  return {
    title,
    description,
    keywords: [
      `watch ${animeData?.name || animeName} dubbed`,
      `${animeData?.name || animeName} english dub`,
      'watch anime dubbed online',
      'anime english dub free',
      'watch cartoons online anime',
      'dubbed anime streaming',
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: 'AnimeWatcher - Watch Anime Dubbed Online',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Watch ${animeData?.name || animeName} English Dubbed`,
        },
      ],
      locale: 'en_US',
      type: 'video.tv_show',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

async function getAnimeData(animeName) {
  // Extract anime ID from the URL parameter (format: id-anime-name)
  if (!animeName) return null;
  
  const animeId = animeName.split('-')[0];
  
  // Fetch anime data from API using ID for accurate results
  try {
    const response = await fetch(
      `https://shikimori.one/api/animes/${animeId}`,
      { cache: 'no-store' }
    );
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return null;
  }
}

const AnimePage = async ({ params }) => {
  const resolvedParams = await params;
  const animeData = await getAnimeData(resolvedParams["anime-name"]);

  if (!animeData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anime Not Found</h1>
          <p className="text-gray-600 mb-6">The anime you're looking for doesn't exist or has been removed.</p>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Browse All Anime
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    "name": animeData.name,
    "image": `https://shikimori.one${animeData.image.original}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": animeData.score,
      "bestRating": "10",
      "ratingCount": "1000"
    },
    "genre": animeData.kind,
    "numberOfEpisodes": animeData.episodes,
    "datePublished": animeData.released_on,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Navbar />
        <div className="md:mt-16 mt-20">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Anime", href: "/" },
            { label: animeData.name }
          ]} />
        </div>
        {/* Hero Section */}
        <div className="relative w-full h-96 md:h-[450px] overflow-hidden bg-gray-900">
          <Image
            src={`https://shikimori.one${animeData.image.original}`}
            width={1920}
            height={450}
            className="w-full h-full object-cover opacity-30"
            alt={`Watch ${animeData.name} English Dubbed`}
            priority
          />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-3">
                <MdOutlineSubtitles className="text-blue-400 text-xl" />
                <span className="text-blue-400 text-sm font-semibold uppercase">English Dubbed</span>
              </div>
              <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
                {animeData.name}
              </h1>
              
              {/* Rating & Type */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                  <FaStar />
                  {animeData.score}
                </div>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                  {animeData.kind}
                </span>
                {animeData.status && (
                  <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
                    {animeData.status}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Watch Button */}
          <Link href={`https://shikimori.one${animeData.url}`} target="_blank" rel="noopener noreferrer">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-2xl">
              <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
            </div>
          </Link>

          {/* Back Button */}
          <div className="absolute top-4 left-4 z-30">
            <Link href="/">
              <div className="bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all">
                <IoMdArrowBack className="text-white text-2xl" />
              </div>
            </Link>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Watch {animeData.name} English Dubbed Online Free
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Stream {animeData.name} dubbed anime online free in high quality. 
              This {animeData.kind} anime series {animeData.episodes ? `has ${animeData.episodes} episodes` : 'is currently ongoing'} 
              {animeData.score && ` and is rated ${animeData.score}/10`}. 
              Watch anime dubbed online with English voice acting. 
              {animeData.released_on && ` Originally released on ${animeData.released_on}.`}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Anime Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <FaCalendar className="text-blue-600 text-lg" />
                <p className="text-xs text-gray-500 font-medium">Release Date</p>
              </div>
              <p className="font-bold text-gray-900">{animeData.released_on || "TBA"}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <FaStar className="text-yellow-500 text-lg" />
                <p className="text-xs text-gray-500 font-medium">Rating</p>
              </div>
              <p className="font-bold text-gray-900">{animeData.score}/10</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <MdMovie className="text-red-600 text-lg" />
                <p className="text-xs text-gray-500 font-medium">Episodes</p>
              </div>
              <p className="font-bold text-gray-900">{animeData.episodes || "Ongoing"}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <BiCategoryAlt className="text-purple-600 text-lg" />
                <p className="text-xs text-gray-500 font-medium">Type</p>
              </div>
              <p className="font-bold text-gray-900">{animeData.kind}</p>
            </div>
          </div>

          {/* Watch Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Watch {animeData.name} Dubbed</h3>
            <p className="text-gray-600 mb-4">
              Ready to watch {animeData.name} with English dubbing? Click below to start streaming this anime online for free.
            </p>
            <Link href={`https://shikimori.one${animeData.url}`} target="_blank" rel="noopener noreferrer">
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <FaPlay />
                Watch Now
              </button>
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default AnimePage;
