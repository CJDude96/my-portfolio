import PortfolioProvider from '@/context/PortfolioProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CJSanche Dev',
  description: 'CJSanche personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  )
}
