import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"
    >
      <span className="inline-block transform -skew-x-12">The</span>
      <span className="inline-block text-white mx-1">Next</span>
      <span className="inline-block transform skew-x-12">Gen</span>
      <span className="inline-block text-white mx-1">Tech</span>
    </Link>
  )
}

