import { Inter, Bangers } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bangers = Bangers({ subsets: ["latin"], weight: "400", variable: "--font-bangers" });

export const metadata = {
  title: {
    absolute: "",
    default: "Watch Anime Dubbed Online Free - English Dub Anime Streaming",
    template: "%s | XAnime Watcher",
  },
  description: {
    absolute: "",
    default:
      "Watch anime dubbed online free. Stream English dub anime episodes in high quality. Find your favorite dubbed anime series and watch cartoons online anime english dub instantly.",
    template: "%s | Watch Anime Dubbed Online Free",
  },
  keywords: [
    "watch anime dubbed online",
    "english dub anime",
    "watch cartoons online anime",
    "anime watch cartoon online",
    "dubbed anime streaming",
    "watch anime dub free",
    "watch cartoons online english dub anime",
    "anime english dubbed online",
  ],
  openGraph: {
    images: [
      "https://pbs.twimg.com/media/GETX8h1bkAAybIx?format=png&name=small",
    ],
    title: ["Watch Anime Dubbed Online Free - English Dub Anime Streaming"],
    description: [
      "Stream English dub anime episodes in high quality. Watch anime dubbed online free with instant access to thousands of series.",
    ],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AnimeWatcher - Watch Cartoons Online Anime Dubbed",
    "description": "Watch cartoons online anime english dub free. Stream dubbed anime and watch anime dub online.",
    "url": "https://xanimewatcher.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://xanimewatcher.vercel.app/anime/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What anime should I watch quiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Take our interactive anime quiz to discover which anime you should watch based on your preferences. Our quiz analyzes your favorite genres, themes, and viewing habits to recommend personalized anime series. Visit our quiz page to get started and find your perfect anime match."
        }
      },
      {
        "@type": "Question",
        "name": "Which anime should I watch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best anime for you depends on your interests. Take our anime recommendation quiz to get personalized suggestions. We offer popular dubbed anime in categories like action, romance, comedy, and more. Browse by genre or take our quiz to discover anime tailored to your taste."
        }
      },
      {
        "@type": "Question",
        "name": "Should I watch anime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anime offers diverse storytelling, stunning animation, and compelling characters across every genre imaginable. Whether you enjoy action-packed adventures, heartwarming romances, thought-provoking dramas, or hilarious comedies, there's an anime for you. Watch anime dubbed online to experience these amazing stories in English."
        }
      },
      {
        "@type": "Question",
        "name": "Can Christians watch anime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many Christians watch anime as it's an animation medium from Japan, similar to Western cartoons or movies. Like any entertainment, choose anime that align with your personal values and beliefs. Many anime feature positive themes like friendship, courage, justice, and perseverance. Review content ratings and descriptions to find appropriate series."
        }
      },
      {
        "@type": "Question",
        "name": "Is it a sin to watch anime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watching anime is not inherently sinful. Anime is simply an entertainment medium like movies, TV shows, or books. The content matters more than the format. Choose anime with positive messages and themes that align with your values. Many anime celebrate virtues like friendship, courage, and doing what's right."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I watch anime uncensored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our platform provides various anime streaming options with different content ratings. Always check the anime's rating and content warnings before watching. We recommend choosing age-appropriate content and reviewing series descriptions to ensure it matches your viewing preferences."
        }
      },
      {
        "@type": "Question",
        "name": "What anime to watch quiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 'what anime to watch quiz' helps you discover anime based on your preferences. Answer questions about your favorite genres, themes, and viewing habits to receive personalized recommendations. The quiz takes just 2 minutes and provides tailored anime suggestions you'll love."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I watch anime dubbed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can watch anime dubbed online free on our platform. We offer a wide selection of English dub anime across all genres including action, romance, comedy, and more. Stream high-quality dubbed anime episodes with easy access to thousands of series."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="CP-bBZfPoKzhXDdIAAeb5AvIDbZoMMJToPGRiBTbb00" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.className} ${bangers.variable}`}>{children}</body>
    </html>
  );
}
