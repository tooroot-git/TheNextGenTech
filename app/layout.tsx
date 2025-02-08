import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import Logo from "./components/Logo"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Own TheNextGenTech.net - Premium Tech Domain for Innovators",
  description:
    "Secure your future in tech with TheNextGenTech.net. A premium domain for cutting-edge startups, AI innovators, and forward-thinking businesses. Limited availability - act now!",
  keywords: "tech domain, next generation technology, AI startup, blockchain domain, premium domain, tech branding",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 p-4 md:p-6 border-b border-gray-800">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Logo />
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="#why" className="text-blue-400 hover:text-blue-300">
                    Why This Domain
                  </Link>
                </li>
                <li>
                  <Link href="#how" className="text-blue-400 hover:text-blue-300">
                    How to Buy
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-blue-400 hover:text-blue-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 p-4 md:p-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">&copy; 2023 TheNextGenTech.net. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

