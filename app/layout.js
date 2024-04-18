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
    <meta name="google-site-verification" content="CP-bBZfPoKzhXDdIAAeb5AvIDbZoMMJToPGRiBTbb00" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
