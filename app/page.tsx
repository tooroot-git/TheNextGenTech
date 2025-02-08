import Hero from "./components/Hero"
import WhyThisDomain from "./components/WhyThisDomain"
import HowToBuy from "./components/HowToBuy"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <WhyThisDomain />
      <HowToBuy />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

