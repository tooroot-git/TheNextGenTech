import { Check, Lock, Globe, Shield, TrendingUp } from "lucide-react"

export default function WhyThisDomain() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Why Thenextgentech.net is a Game-Changer
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Unmatched Advantages</h3>
            <ul className="space-y-4">
              {[
                "Short & Memorable: Makes a lasting impression",
                "Perfect for Startups, AI, Blockchain, or SaaS Companies",
                "Strong Tech Industry Presence: The name itself projects innovation",
                "Secure & Valuable Investment: Domain prices are rising, secure it today!",
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Domain Value Comparison</h3>
            <p className="mb-6 text-white">Similar domains that sold for $10,000+:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <TrendingUp className="mr-3 text-green-400" />
                <span className="text-white">AItech.net - Sold for $15,000</span>
              </li>
              <li className="flex items-center">
                <TrendingUp className="mr-3 text-green-400" />
                <span className="text-white">FutureTech.com - Sold for $25,000</span>
              </li>
            </ul>
            <p className="text-2xl md:text-3xl font-bold text-green-400">Thenextgentech.net: A steal at $4,500!</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-12 space-x-8">
          <div className="flex items-center">
            <Lock className="mr-2 text-blue-400" />
            <span className="text-white">Safe Purchase</span>
          </div>
          <div className="flex items-center">
            <Shield className="mr-2 text-blue-400" />
            <span className="text-white">Instant Transfer</span>
          </div>
          <div className="flex items-center">
            <Globe className="mr-2 text-blue-400" />
            <span className="text-white">Global Visibility</span>
          </div>
        </div>
        <p className="text-center mt-12 text-2xl font-bold text-yellow-400 animate-pulse">
          Only One Thenextgentech.net Exists - Don't Miss Out!
        </p>
      </div>
    </section>
  )
}

