import { ShoppingCart, CreditCard, CheckCircle } from "lucide-react"

export default function HowToBuy() {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Click "Buy Now"',
      description: "Purchase instantly via Sedo",
    },
    {
      icon: CreditCard,
      title: "Complete Transaction",
      description: "Secure and straightforward process",
    },
    {
      icon: CheckCircle,
      title: "Ownership Transfer",
      description: "We transfer the domain to you within 24-48 hours",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Own Thenextgentech.net in 3 Easy Steps!
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{step.title}</h3>
              <p className="text-white">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-xl text-blue-200">
          Questions? Email us at{" "}
          <a href="mailto:support@2us.io" className="text-blue-400 hover:underline">
            support@2us.io
          </a>
        </p>
      </div>
    </section>
  )
}

