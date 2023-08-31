"use client"
import { data } from "@/dummy/project";
import CardProject from "@/features/cardProject";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <div className="mx-mobile sm:mx-tablet lg:mx-content font-jakartaSans mt-32 lg:mt-80">
            <div className="flex flex-col w-full">
                <span className="relative mt-2 inline-block sm:mt-0 z-">
                    <h1 className="text-redViolet text-4xl sm:text-5xl lg:text-6xl font-semibold z-20 flex flex-row"><motion.span
                        initial={{ y: 50, x: -50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >🚀</motion.span>&nbsp;Highlighted Project</h1>
                    <span className="title-highlight absolute left-[80px] -bottom-1 -z-10 hidden h-[15px] w-[250px] sm:flex sm:bottom-2 sm:w-[320px] md:bottom-1 lg:h-[10px] lg:w-[560px]"></span>
                </span>

                <h3 className="text-white mt-10 text-lg sm:text-xl lg:text-2xl w-full lg:w-[70%] text-justify z-20">
                    I&#39;ve worked on a variety of projects, ranging from small MVPs to full-scale applications, also developed a wide array of features
                    and functionalities in projects.
                </h3>

                <div>
                    {
                        data.map((item, index) => {
                            return (
                                <CardProject
                                    key={index}
                                    nama={item.nama}
                                    github={item.github}
                                    deploy={item.deploy}
                                    technology={item.technology}
                                    desc={item.desc}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;