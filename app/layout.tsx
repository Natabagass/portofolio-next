import Navbar from '@/partials/navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/partials/footer'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Portofolio | Bagas Meganata',
  icons: {
    icon: '/icon/icons.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <Head>
        <link rel='icon' href='/icon/icons.png'></link>
      </Head>
      <body className='bg-darkClassicBlue'>
        <link rel="icon" href="/icon/icons.png" sizes="any" />
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
