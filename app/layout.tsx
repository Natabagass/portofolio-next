import Navbar from '@/partials/navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/partials/footer'

export const metadata: Metadata = {
  title: 'Portofolio | Bagas Meganata',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='bg-darkClassicBlue'>
        <nav className='w-full flex items-center justify-center max-w-screen-2xl mx-auto'>
          <Navbar />
        </nav>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
