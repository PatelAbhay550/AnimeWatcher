import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaQuestionCircle, FaPlay } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

export const metadata = {
  title: "What Anime Should I Watch Quiz - Find Your Perfect Anime Match",
  description: "Take our 'what anime should I watch quiz' to discover your perfect anime match. Interactive anime recommendation quiz based on your preferences. Which anime should you watch?",
  keywords: ["what anime should i watch quiz", "anime quiz", "which anime should i watch quiz", "what anime to watch quiz", "anime recommendation quiz"],
};

export default function AnimeQuizPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 md:mt-16 mt-20">
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MdQuiz className="text-blue-600 text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Anime Should I Watch Quiz?
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Not sure which anime to watch next? Take our interactive quiz to discover anime that matches your taste! 
              Answer a few simple questions and get personalized anime recommendations.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                ⏱️ Takes 2 minutes
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                🎯 Personalized results
              </span>
            </div>
          </div>
        </div>

        {/* Quiz Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaQuestionCircle className="text-blue-600" />
              How the Quiz Works
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Our "what anime should I watch quiz" helps you find the perfect anime based on your preferences. 
                We analyze your favorite genres, themes, and watching habits to recommend anime that you'll love.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl mb-2">1️⃣</div>
                  <h3 className="font-bold mb-2">Answer Questions</h3>
                  <p className="text-sm">Tell us about your preferences and what you enjoy</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl mb-2">2️⃣</div>
                  <h3 className="font-bold mb-2">Get Results</h3>
                  <p className="text-sm">Receive personalized anime recommendations</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl mb-2">3️⃣</div>
                  <h3 className="font-bold mb-2">Start Watching</h3>
                  <p className="text-sm">Browse and watch your recommended anime dubbed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quiz Start Button */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Anime?</h3>
            <p className="mb-6 opacity-90">Take the quiz now and discover anime tailored to your taste</p>
            <Link href="/">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2">
                <FaPlay />
                Start Quiz
              </button>
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Anime
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Which anime should I watch quiz?
                </h3>
                <p className="text-gray-700">
                  Our anime quiz asks about your favorite genres (action, romance, comedy), preferred themes, 
                  and viewing habits to recommend anime that matches your taste. Take the quiz above to get started!
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Should I watch anime?
                </h3>
                <p className="text-gray-700">
                  Anime offers diverse storytelling, stunning animation, and compelling characters across every genre. 
                  Whether you enjoy action, drama, comedy, or romance, there's an anime series for you. 
                  Watch anime dubbed online to experience these amazing stories.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can Christians watch anime?
                </h3>
                <p className="text-gray-700">
                  Many Christians watch anime, as it's simply an animation medium from Japan. Like any entertainment, 
                  choose anime that align with your values. Many anime focus on themes of friendship, perseverance, 
                  and justice. Always review content beforehand to ensure it matches your comfort level.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Is it a sin to watch anime?
                </h3>
                <p className="text-gray-700">
                  Watching anime itself is not inherently sinful. Anime is an entertainment medium like movies or TV shows. 
                  Focus on content that promotes positive values and avoid series with themes contrary to your beliefs. 
                  Many anime celebrate courage, friendship, and doing what's right.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Where can I watch anime uncensored?
                </h3>
                <p className="text-gray-700">
                  Our platform provides anime streaming with various viewing options. For mature content, 
                  check the anime's rating and description. We recommend watching age-appropriate content 
                  and always review series information before viewing.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What anime to watch quiz recommendations?
                </h3>
                <p className="text-gray-700">
                  Based on your quiz results, you'll get recommendations across various genres including 
                  action anime dubbed, romance anime english dub, comedy series, and more. 
                  Each recommendation includes ratings, episode counts, and viewing links.
                </p>
              </div>
            </div>
          </div>

          {/* Browse Section */}
          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Or Browse By Category</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/action" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-1">⚔️ Action Anime Dubbed</h4>
                <p className="text-sm text-gray-600">Epic battles and thrilling adventures</p>
              </Link>
              <Link href="/romance" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-1">💗 Romance Anime English Dub</h4>
                <p className="text-sm text-gray-600">Heartwarming love stories</p>
              </Link>
              <Link href="/popular" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-1">🔥 Popular Dubbed Anime</h4>
                <p className="text-sm text-gray-600">Most watched series right now</p>
              </Link>
              <Link href="/latest" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-1">🆕 Latest English Dub Episodes</h4>
                <p className="text-sm text-gray-600">Newest releases and updates</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
