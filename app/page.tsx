import About from '@/section/about'
import Hero from '@/section/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="flex justify-start absolute w-full -z-0">
        <div className="w-[500px] h-[500px] blur-[200px] ml-36 -mt-96 rounded-full bg-turqoise" />
      </div>
      <section id='#home'>
        <Hero />
      </section>

      <section id='#about'>
        <About />
      </section>
    </main>
  )
}
