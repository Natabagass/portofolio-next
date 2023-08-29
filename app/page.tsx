import About from '@/section/about'
import Hero from '@/section/hero'
import Project from '@/section/project'
import Technology from '@/section/technology'
import ButtonUp from '@/utils/buttonUp'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="flex justify-start absolute w-full -z-0">
        <div className="w-[500px] h-[500px] blur-[200px] ml-36 -mt-96 rounded-full bg-turqoise" />
      </div>
      <section id='home' className='mt-10 scroll-mt-10'>
        <Hero />
      </section>

      <section id='about' className='scroll-mt-64'>
        <About />
      </section>

      <section id='techStack' className='scroll-mt-20'>
        <Technology />
      </section>

      <section id='project'>
        <Project />
      </section>

      <ButtonUp />
    </main>
  )
}
