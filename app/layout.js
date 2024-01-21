import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "",
    default: "Anime Watcher - Get Details Of All Anime",
    template: "%s | Anime Watcher",
  },
  description: {
    absolute: "",
    default:
      "Dwelve into amazing world of Anime with Anime Watcher. Get all data like anime name, episodes,link,images,videos,release date",
    template: "%s | in Anime Watcher",
  },
  openGraph: {
    images: [
      "https://pbs.twimg.com/media/GETX8h1bkAAybIx?format=png&name=small",
    ],
    title: ["Anime Watcher - Get Details Of All Anime"],
    description: [
      "Dwelve into amazing world of Anime with Anime Watcher. Get all data like anime name, episodes,link,images,videos,release date",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Anime Watcher" />
      <meta name="twitter:site" content="@animewatcher_in" />
      <meta
        name="twitter:description"
        content="Dwelve into amazing world of Anime with Anime Watcher."
      />
      <meta
        name="twitter:image"
        content="https://pbs.twimg.com/media/GETX8h1bkAAybIx?format=png&name=small"
      />
      <meta name="twitter:image:alt" content="AnimeWatcher" />
      <link rel="icon" type="image/x-icon" href="/logo.svg" />
      <meta
        property="og:description"
        content="Dwelve into amazing world of Anime with Anime Watcher."
      />
      <meta property="og:title" content="Anime Watcher" />
      <meta property="og:url" content="https://anime-watcher.vercel.app/" />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/media/GETX8h1bkAAybIx?format=png&name=small"
      /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
