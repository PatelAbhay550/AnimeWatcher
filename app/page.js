import Image from "next/image";
import { fetchAnime } from "./action";
import { delay, motion } from "framer-motion";
import Loadmore from "@/components/Loadmore";
import { MotionDiv } from "@/components/MotionDiv";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default async function Home() {
  const data = await fetchAnime(1);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <>
      <main className="grid gridd gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 md:mt-16 mt-20">
        <Navbar />

        {data.map((item) => (
          <MotionDiv
            key={item.id}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1,
              ease: "easeInOut",
              duration: 0.5,
            }}
            variants={variants}
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

              <div className="data text-white text-lg px-0 pl-3 gap-1 flex flex-col ">
                <h2 className="text-slate-900  overflow-hidden truncate w-[250px] whitespace-nowrap text-3xl font-sans font-bold">
                  {item.name}
                </h2>
                <h2>Kind:{item.kind}</h2>
                <h2>Score:{item.score}</h2>
                <Link
                  href={{
                    pathname: "/anime",
                    query: {
                      name: encodeURIComponent(item.name),
                      image: encodeURIComponent(item.image.original),

                      score: encodeURIComponent(item.score),
                      episodes: encodeURIComponent(item.episodes),
                      released_on: encodeURIComponent(item.released_on),
                      aired: encodeURIComponent(item.aired_on),
                      url: encodeURIComponent(item.url),
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
      </main>
      <Loadmore />
    </>
  );
}
