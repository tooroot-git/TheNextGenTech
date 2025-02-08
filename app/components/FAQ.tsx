"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Why is Thenextgentech.net valuable?",
    answer:
      "The term 'NextGen Tech' is widely used in AI, cybersecurity, and fintech, making this domain a high-demand asset. It instantly positions your brand at the forefront of innovation.",
  },
  {
    question: "What happens after I buy?",
    answer:
      "You receive full domain ownership and control within 24-48 hours. We'll guide you through the entire process to ensure a smooth transfer.",
  },
  {
    question: "Can I make an offer below $4,500?",
    answer:
      'Yes! Click "Make an Offer" and submit your best price. We\'re open to reasonable offers and are committed to finding a deal that works for both parties.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-xl text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-400" />
                ) : (
                  <ChevronDown className="text-blue-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-gray-700">
                  <p className="text-blue-200">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

