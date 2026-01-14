"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImSpinner } from "react-icons/im";
import { fetchAnime } from "@/app/action";
import Link from "next/link";
let page = 2;
const Loadmore = () => {
  const { ref, inView } = useInView();
  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (inView) {
        try {
          const newData = await fetchAnime(page);
          setAnimeData((prevData) => {
            // Filter out duplicates by id
            const existingIds = new Set(prevData.map(item => item.id));
            const uniqueNewData = newData.filter(item => !existingIds.has(item.id));
            return [...prevData, ...uniqueNewData];
          });
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
      <div className="bg-gray-50 p-4">
        <div className="grid gridd gap-4">
        {animeData.map((item, index) => (
          <div
            key={`anime-${item.id}-${index}`}
            className="group hover:scale-105 transition-transform duration-300 bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm h-[420px] flex flex-col"
          >
            <div className="relative h-64 flex-shrink-0">
              <Image
                className="w-full h-full object-cover object-top"
                src={`https://shikimori.one${item.image.original}`}
                alt={item.name}
                width={400}
                height={300}
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                ⭐ {item.score}
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
