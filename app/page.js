import Image from "next/image";
import { fetchAnime } from "./action";
import { delay, motion } from "framer-motion";
import Loadmore from "@/components/Loadmore";
import { MotionDiv } from "@/components/MotionDiv";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const data = await fetchAnime(1);
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <main className="flex min-h-screen flex-col md:grid md:grid-cols-2 gap-2 items-center bg-gradient-to-r from-sky-500 to-indigo-500 justify-between p-24">
      <Navbar />
      <div>
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
            className="text-3xl mb-4 h-80 w-80 overflow-hidden rounded-lg backdrop-blur-sm bg-white/30"
          >
            <h2 className="text-slate-900 flex items-center justify-center font-sans font-bold bg-lime-300  h-1/5">
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
                <h2>Name:{item.name}</h2>
                <h2>Kind:{item.kind}</h2>
                <h2>Score:{item.score}</h2>
                <h2>Released:{item.released_on}</h2>
              </div>
            </div>
          </MotionDiv>
        ))}
        <Loadmore />
      </div>
    </main>
  );
}
