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
    <div className="flex min-h-screen flex-col gap-2 items-center bg-gradient-to-r from-sky-500 to-indigo-500 justify-between">
      <div className="w-full h-screen flex flex-col">
        <div className="imgcard w-full h-1/2 sh select-none md:h-1/3 relative overflow-hidden">
          <Image
            src={`https://shikimori.one${decodedImage}`}
            width={400}
            className="relative select-none md:w-screen"
            height={333.5}
            alt={decodedName}
          />
          <h1 className="absolute pl-3 pb-2 z-10 text-[50px] drop-shadow font-black bottom-0">
            {decodedName}
          </h1>
          <Link href={`https://shikimori.one${decodedUrl}`} target="_blank">
            <div className="play rounded-full absolute z-10 bottom-6 right-5 bg-lime-900 w-12 flex items-center justify-center h-12">
              <FaPlay className="pl-1 text-white text-[30px] drop-shadow font-black " />
            </div>
          </Link>
          <div className="back w-full absolute top-0 left-0 z-30 h-10 to-black bg-gradient-to-r">
            <Link href="/" className="">
              <IoMdArrowBack className="text-white drop-shadow-lg text-4xl" />
            </Link>
          </div>
        </div>
        <div className="dets flex gap-2 pt-5 flex-col items-center justify-center">
          <div className="rel card">
            <h2>
              <FaRegCalendarTimes /> Release: {decodedReleasedOn}
            </h2>
          </div>
          <div className="rat card">
            <h3>
              <FaImdb /> Rating: {decodedScore}
            </h3>
          </div>
          <div className="eps card">
            <h4>
              <MdMovie /> Episodes: {decodedEpisodes}
            </h4>
          </div>
          <div className="air card">
            <h5>
              <PiTelevisionFill /> Aired: {decodedAired}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
