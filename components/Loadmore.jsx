"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImSpinner } from "react-icons/im";
import { fetchAnime } from "@/app/action";
import { MotionDiv } from "./MotionDiv";
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
      <div className="flex min-h-screen flex-col  gap-2 ">
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
            className="text-3xl mb-4 h-80 w-80 overflow-hidden rounded-lg backdrop-blur-sm bg-white/30"
          >
            <h2 className="text-slate-900 flex items-center justify-center font-sans font-bold bg-lime-300 h-1/5">
              {item.name}
            </h2>
            <div className="dets w-full flex h-4/5">
              <Image
                className="h-full object-cover w-2/3"
                src={`https://shikimori.one${item.image.original}`}
                alt={item.name}
                width={100}
                height={200}
              />
              <div className="data text-white text-lg pl-3 flex flex-col gap-1">
                <h2>Name: {item.name}</h2>
                <h2>Kind: {item.kind}</h2>
                <h2>Score: {item.score}</h2>
                <h2>Released: {item.released_on}</h2>
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
