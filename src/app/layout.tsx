import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/providers/QueryProvider'
import Header from './components/layout/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mini-Commerce',
  description: 'A tiny e-commerce shop prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <Header />
            <div className="min-h-screen flex flex-col items-center">
              
              <main className="flex-1 py-8 px-5 md:px-0">{children}</main>
              {/* Footer would go here */}
            </div>
        </QueryProvider>
      </body>
    </html>
  )
}