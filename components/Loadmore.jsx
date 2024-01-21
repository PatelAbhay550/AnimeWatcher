"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImSpinner } from "react-icons/im";
import { fetchAnime } from "@/app/action";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
let page = 2;
const Loadmore = () => {
  const { ref, inView } = useInView();
  const [animeData, setAnimeData] = useState([]);
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  useEffect(() => {
    const fetchData = async () => {
      if (inView) {
        try {
          const newData = await fetchAnime(page);
          setAnimeData((prevData) => [...prevData, ...newData]);
          page++;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [inView]);

  return (
    <>
      <div className="grid gridd gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 ">
        {animeData.map((item) => (
          <MotionDiv
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              ease: "easeInOut",
              duration: 0.5,
            }}
            variants={variants}
            key={item.id}
            className="text-3xl mb-4 md:h-96 pb-4 md:pb-0 md:w-96 w-80 h-80 overflow-hidden rounded-lg backdrop-blur-sm bgg"
          >
            <div className="dets w-full  flex flex-col p-3  h-4/5">
              <Image
                className="h-3/4 object-cover object-top rounded-md w-full"
                src={`https://shikimori.one${item.image.original}`}
                alt={item.name}
                width={100}
                height={200}
              />
              <div className="data text-white px-0 text-lg pl-3 gap-1  flex flex-col">
                <h2 className="text-slate-900  text-3xl overflow-hidden truncate w-[250px] whitespace-nowrap font-sans font-bold">
                  {item.name}
                </h2>
                <h2>Kind: {item.kind}</h2>
                <h2>Score: {item.score}</h2>
                <Link
                  href={{
                    pathname: "/anime",
                    query: {
                      name: encodeURIComponent(item.name),
                      image: encodeURIComponent(item.image.original),
                      kind: encodeURIComponent(item.kind),
                      score: encodeURIComponent(item.score),
                      episodes: encodeURIComponent(item.episodes),
                      released_on: encodeURIComponent(item.released_on),
                      aired: encodeURIComponent(item.aired_on),
                      url: encodeURIComponent(item.url),
                      previmg: encodeURIComponent(
                        JSON.stringify(item.image.preview)
                      ),
                      x96: encodeURIComponent(item.image.x96),
                      x48: encodeURIComponent(item.image.x48),
                    },
                  }}
                >
                  <button className="md:w-28 w-32 mt-2 rounded bg-slate-900 h-8 whitespace-nowrap">
                    More info
                  </button>
                </Link>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className="main w-full flex items-center justify-center" ref={ref}>
        {inView && (
          <ImSpinner className="animate-spin text-4xl text-lime-500 mt-5" />
        )}
      </div>
    </>
  );
};

export default Loadmore;
