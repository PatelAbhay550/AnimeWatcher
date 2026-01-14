import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTv, FaPlay } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/logo.svg" alt="Logo" width={32} height={32} className="object-contain filter invert" />
                      <h3 className="text-white font-bold text-lg">
                        XAnimeWatcher
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Watch anime dubbed online free. Stream English dub anime in high quality.
                    </p>
                  </div>

                  {/* Browse Section */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <MdMovie className="text-blue-500" />
              Browse Anime
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quiz" className="hover:text-blue-400 transition-colors">
                  Anime Quiz
                </Link>
              </li>
              <li>
                <Link href="/popular" className="hover:text-blue-400 transition-colors">
                  Popular Dubbed Anime
                </Link>
              </li>
              <li>
                <Link href="/latest" className="hover:text-blue-400 transition-colors">
                  Latest English Dub Episodes
                </Link>
              </li>
              <li>
                <Link href="/action" className="hover:text-blue-400 transition-colors">
                  Action Anime Dubbed
                </Link>
              </li>
              <li>
                <Link href="/romance" className="hover:text-blue-400 transition-colors">
                  Romance Anime English Dub
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Terms */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <FaPlay className="text-blue-500" />
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors cursor-default">
                watch anime dub
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors cursor-default">
                english dub anime
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors cursor-default">
                dubbed anime online
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors cursor-default">
                anime watch online
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors cursor-default">
                watch cartoons anime
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} AnimeWatcher. Watch anime dubbed online free.
          </p>
          <p className="text-gray-500">
            Stream English dub anime | Watch cartoons online anime english dub | Dubbed anime streaming platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
