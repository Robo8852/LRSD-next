import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LRSD Dumpster Rentals — Florida Gulf Coast',
  description:
    'Professional dumpster rental and waste management services across the Florida Gulf Coast. Licensed, insured, and locally owned.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  )
}
