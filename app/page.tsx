import About from '@/section/about'
import Hero from '@/section/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-screen-2xl">\
      <section id='Hero'>
        <Hero />
      </section>

      <section id='Hero'>
        <About />
      </section>
    </main>
  )
}
