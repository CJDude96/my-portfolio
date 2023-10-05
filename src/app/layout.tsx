import PortfolioProvider from '@/context/PortfolioProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto, Raleway  } from 'next/font/google'


const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin-ext'],
  variable: '--font-roboto'
})


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
      <body className={roboto.className}>
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  )
}
