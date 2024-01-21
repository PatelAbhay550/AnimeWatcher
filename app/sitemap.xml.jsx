import { format } from "date-fns";
import { fetchAnime } from "./action";

// IIFE to use async/await
const generateSitemap = async () => {
  const animeData = await fetchAnime(1);
  const encodedData = {
    name: encodeURIComponent(item.name),
    image: encodeURIComponent(item.image.original),
    score: encodeURIComponent(item.score),
    episodes: encodeURIComponent(item.episodes),
    released_on: encodeURIComponent(item.released_on),
    aired: encodeURIComponent(item.aired_on),
    url: encodeURIComponent(item.url),
  };

  return (
    <>
      {`<?xml version="1.0" encoding="UTF-8"?>`}
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        {animeData.map((item) => (
          <url key={item.name}>
            <loc>{`https://xanimewatcher.vercel.app/anime/${encodedData.name}${encodedData.image}${encodedData.score}${encodedData.episodes}${encodedData.released_on}${encodedData.aired}${encodedData.url}`}</loc>
            <lastmod>
              {format(new Date(item.date_modified), "yyyy-MM-dd")}
            </lastmod>
          </url>
        ))}
      </urlset>
    </>
  );
};

// IIFE to run the async function
(async () => {
  // Render the component
  const generatedSitemap = await generateSitemap();

  // Log or use the generated sitemap JSX as needed
  console.log(generatedSitemap);
})();
