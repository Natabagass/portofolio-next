import About from '@/section/about'
import Hero from '@/section/hero'
import Project from '@/section/project'
import Technology from '@/section/technology'
import Work from '@/section/work'
import ButtonUp from '@/utils/buttonUp'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="flex justify-start absolute w-full -z-0">
        <div className="w-[500px] h-[500px] blur-[200px] ml-36 -mt-96 rounded-full bg-turqoise" />
      </div>
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <section className='mt-10 scroll-mt-10'>
          <Hero />
        </section>

        <section id='about' className='scroll-mt-64'>
          <div className="flex justify-start absolute w-full -z-0">
            <div className="w-[700px] h-[200px] lg:h-[300px] blur-[200px] ml-36 mt-20 lg:-mt-10 rounded-full bg-turqoise" />
          </div>
          <About />
        </section>

        <section id='work-experience' className='scroll-mt-32'>
          <div className="flex flex-row justify-end absolute w-full -z-20 max-w-screen-2xl mx-auto">
            <div className="w-[700px] h-[200px] blur-[200px] mt-80 rounded-full bg-gold" />
            <div className="w-[700px] h-[400px] blur-[200px] mr-36 mt-80 rounded-full bg-turqoise" />
          </div>
          <Work />
        </section>

        <section id='project' className='scroll-mt-32'>
          <div className="flex flex-col items-end justify-end absolute w-full -z-0 max-w-screen-2xl mx-auto">
            <div className="w-[700px] h-[400px] blur-[200px] mr-36 mt-72 rounded-full bg-gold" />
            <div className="w-[700px] h-[300px] blur-[200px] mt-56 rounded-full bg-turqoise" />
            <div className="w-[700px] h-[300px] blur-[200px] mr-80 mt-56 rounded-full bg-pastelPurple" />
          </div>
          <Project />
        </section>

        <section id='tech-stack' className='scroll-mt-32'>
          <div className="flex justify-end absolute w-full -z-0 max-w-screen-2xl mx-auto">
            <div className="w-[700px] h-[400px] blur-[200px] mr-36 mt-36 rounded-full bg-pastelPurple" />
          </div>
          <Technology />
        </section>

        <ButtonUp />
      </div>
    </main>
  )
}
