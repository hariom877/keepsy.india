import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keepsy - India\'s Trusted Wholesale Supplier for Toys, Gifts & Décor',
  description: 'Supplying 500+ retailers with quality toys, gift accessories, car dashboard items, and showpieces. Minimum 100 pieces per product, best margins, pan-India delivery.',
  keywords: 'wholesale toys, gift accessories, car dashboard items, showpieces, B2B supplier, India',
  authors: [{ name: 'Keepsy India' }],
  openGraph: {
    title: 'Keepsy - India\'s Trusted Wholesale Supplier',
    description: 'Supplying 500+ retailers with quality toys, gifts & décor',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <a
          href="#contact"
          className="fixed bottom-6 right-6 z-50 btn-primary shadow-lg px-6 py-4 rounded-full font-inter text-sm font-medium hover:scale-105 transition-all duration-300"
          aria-label="Request a Quote"
        >
          Request Quote
        </a>
      </body>
    </html>
  )
}


