"use server";
export const fetchAnime = async (page) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=6&order=popularity`
  );

  const data = await response.json();

  return data;
};
