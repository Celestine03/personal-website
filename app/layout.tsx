"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Celestine's website",
  description: 'Created by Celestine Tan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body> 
      </html>
    
  )
}
