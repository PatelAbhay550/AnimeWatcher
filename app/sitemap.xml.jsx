import { fetchAnime } from "./action";

const getRandomDate = () => {
  // Get a random date within the last year
  const currentDate = new Date();
  const lastYear = currentDate.getFullYear() - 1;
  const randomYear = Math.floor(Math.random() * 2) + lastYear;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming all months have 28 days

  return new Date(`${randomYear}-${randomMonth}-${randomDay}`);
};

export default async function sitemap({ id }) {
  const animeData = await fetchAnime(1);

  return animeData.map((item) => ({
    url: `https://xanimewatcher.vercel.app/anime/${encodeURIComponent(item.name)}`,
    lastModified: getRandomDate().toISOString(), // Convert the date to ISO string
  }));
}
