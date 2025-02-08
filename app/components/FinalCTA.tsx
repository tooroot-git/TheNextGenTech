import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Don't Miss Your Chance – The Future is NextGen Tech!
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-200">Secure This Premium Domain Before Someone Else Does!</p>
        <div className="flex justify-center items-center gap-4 mb-12">
          <Clock className="text-yellow-400 animate-pulse" size={32} />
          <p className="text-2xl md:text-3xl font-bold text-yellow-400">Limited Availability - Act Now!</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="https://sedo.com/search/?keyword=thenextgentech.net"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center text-lg flex items-center justify-center"
          >
            Buy Now for $4,500 <ArrowRight className="ml-2" />
          </Link>
          <Link
            href="mailto:offer@2us.io"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center text-lg flex items-center justify-center"
          >
            Make Your Best Offer <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

