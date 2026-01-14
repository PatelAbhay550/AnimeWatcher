import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FaImdb } from "react-icons/fa";
import { Metadata } from "next";
export async function generateMetadata({ searchParams }, parent) {
  // read route params
  const decodedImage = decodeURIComponent(searchParams.image);
  const decodedName = decodeURIComponent(searchParams.name);
  return {
    title: decodedName,
    description:
      "See " +
      decodedName +
      "'s" +
      " all details, " +
      decodedName +
      "'s" +
      " release date, " +
      decodedName +
      "'s" +
      " score," +
      " and " +
      decodedName +
      "'s" +
      " videos.",
    openGraph: {
      images: [`https://shikimori.one${decodedImage}`],
    },
  };
}

const page = ({ searchParams }) => {
  // Decode parameters
  const decodedName = decodeURIComponent(searchParams.name);
  const decodedImage = decodeURIComponent(searchParams.image);
  const decodedScore = decodeURIComponent(searchParams.score);
  const decodedEpisodes = decodeURIComponent(searchParams.episodes);
  const decodedReleasedOn = decodeURIComponent(searchParams.released_on);
  const decodedAired = decodeURIComponent(searchParams.aired);
  const decodedUrl = decodeURIComponent(searchParams.url);

  return (
    <div className="flex min-h-screen flex-col gap-2 items-center bg-gray-50 justify-between">
      <div className="w-full min-h-screen flex flex-col">
        <div className="imgcard w-full h-96 select-none md:h-[500px] relative overflow-hidden bg-gradient-to-t from-gray-900 to-gray-700">
          <Image
            src={`https://shikimori.one${decodedImage}`}
            width={800}
            className="relative select-none w-full h-full object-cover opacity-40"
            height={500}
            alt={decodedName}
          />
          <h1 className="absolute pl-6 pb-4 z-10 text-4xl md:text-6xl text-white drop-shadow-lg font-black bottom-16">
            {decodedName}
          </h1>
          <Link href={`https://shikimori.one${decodedUrl}`} target="_blank">
            <div className="play rounded-full absolute z-10 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 w-14 flex items-center justify-center h-14 transition-all hover:scale-110">
              <FaPlay className="pl-1 text-white text-[30px] drop-shadow font-black " />
            </div>
          </Link>
          <div className="back w-full absolute top-0 left-0 z-30 h-16 bg-gradient-to-b from-black/50 to-transparent flex items-center">
            <Link href="/" className="ml-4">
              <IoMdArrowBack className="text-white drop-shadow-lg text-4xl hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="dets flex gap-4 p-6 flex-wrap items-center justify-center">
          <div className="rel card bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow">
            <h2 className="flex items-center gap-2 text-gray-800 font-semibold">
              <FaRegCalendarTimes className="text-blue-600" /> Release: {decodedReleasedOn}
            </h2>
          </div>
          <div className="rat card bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow">
            <h3 className="flex items-center gap-2 text-gray-800 font-semibold">
              <FaImdb className="text-yellow-500" /> Rating: {decodedScore}
            </h3>
          </div>
          <div className="eps card bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow">
            <h4 className="flex items-center gap-2 text-gray-800 font-semibold">
              <MdMovie className="text-red-600" /> Episodes: {decodedEpisodes}
            </h4>
          </div>
          <div className="air card bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow">
            <h5 className="flex items-center gap-2 text-gray-800 font-semibold">
              <PiTelevisionFill className="text-purple-600" /> Aired: {decodedAired}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
