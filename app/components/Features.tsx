import { ShoppingCart, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "Memorable Brand",
    description: "Instantly recognizable for e-commerce and quick purchasing solutions.",
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    description: "Communicates speed and simplicity in online transactions.",
  },
  {
    icon: Globe,
    title: "Global Appeal",
    description: "Short, catchy, and internationally understood.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why BuyQuick.io?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

