export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://xanimewatcher.vercel.app/sitemap.xml',
  };
}
