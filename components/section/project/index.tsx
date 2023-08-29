"use client"
import { motion } from "framer-motion";

const Project = () => {
    return (
        <div className="mx-content font-jakartaSans mt-60">
            <div className="flex flex-col w-full">
                <motion.span
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative mt-2 inline-block sm:mt-0">
                    <h1 className="text-redViolet text-6xl font-semibold z-20">🚀 Highlighted Project</h1>
                    <span className="title-highlight absolute left-[85px] -bottom-1 -z-10 hidden h-[15px] w-[250px] max-[350px]:w-[220px] min-[375px]:block sm:bottom-2 sm:w-[320px] md:bottom-1 lg:h-[10px] lg:w-[550px]"></span>
                </motion.span>

                <h3 className="text-white mt-10 text-2xl w-[70%]">
                    I&#39;ve worked on a variety of projects, ranging from small MVPs to full-scale applications, also developed a wide array of features
                    and functionalities in projects.
                </h3>
            </div>
        </div>
    );
}

export default Project;