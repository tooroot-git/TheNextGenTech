import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Secure Your E-commerce Future</h2>
        <p className="text-xl text-white mb-8">Don't miss this opportunity to own a premium domain</p>
        <Link
          href="https://sedo.com/search/?keyword=buyquick.io"
          className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
        >
          Buy Now
        </Link>
      </div>
    </section>
  )
}

