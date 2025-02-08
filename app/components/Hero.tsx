import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">The Future of Technology Starts Here</h1>
          <p className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-6">
            Thenextgentech.net
          </p>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto">
            A premium domain for cutting-edge startups, tech innovators, and forward-thinking businesses.
          </p>
        </div>
        <div className="bg-gray-800 bg-opacity-75 p-6 rounded-xl shadow-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Key Selling Points</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Short, Brandable & Future-Ready – Perfect for tech businesses",
              "SEO-Friendly & Easy to Remember – Great for digital branding",
              "Strong Authority in the Tech Industry – The name speaks for itself",
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="https://sedo.com/search/?keyword=thenextgentech.net"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center text-lg"
          >
            Buy Now - $4,500
          </Link>
          <Link
            href="mailto:offer@2us.io"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center text-lg"
          >
            Make an Offer
          </Link>
        </div>
      </div>
    </section>
  )
}

