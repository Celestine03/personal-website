"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="MCRlaMCoAi26zJKX8ZzFVTjLHKUQbhUAp_aH8_IsAL4" />
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />
        </body> 
      </html>
    
  )
}
