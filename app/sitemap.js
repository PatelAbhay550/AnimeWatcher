export default async function sitemap() {
  const baseUrl = 'https://xanimewatcher.vercel.app/'; // Replace with your actual domain

  // Fetch anime data for dynamic routes
  let animeUrls = [];
  try {
    const response = await fetch('https://shikimori.one/api/animes?limit=50', {
      cache: 'no-store'
    });
    const animeData = await response.json();
    
    animeUrls = animeData.map((anime) => ({
      url: `${baseUrl}/anime/${encodeURIComponent(anime.name)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Error fetching anime data for sitemap:', error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/anime`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...animeUrls,
  ];
}
