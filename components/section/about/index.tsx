"use client"
import Image from "next/image";
import img from "@/img/Saly-19.svg"
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="mx-mobile sm:mx-tablet lg:mx-content font-jakartaSans text-white lg:mt-48">
            <span className="relative mt-2 inline-block sm:mt-0">
                <h1 className="text-redViolet text-4xl sm:text-5xl lg:text-6xl font-semibold z-20 flex flex-row"><motion.span 
                    initial={{ y: 50, x: -50, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}>😀</motion.span>About</h1>
                <span className="title-highlight sm:flex absolute left-[60px] lg:left-[75px] -bottom-1 -z-10 hidden h-[15px] w-[150px] sm:-bottom-1 lg:bottom-1 lg:h-[10px] lg:w-[180px]"></span>
            </span>
            <div className="flex flex-row w-full justify-between mt-10 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="relative flex lg:w-[85%] xl:w-full">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex flex-col lg:mx-0 mx-auto  rounded-3xl">
                        <div className="bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-6 rounded-3xl w-full flex h-fit">
                            <p className="text-lg sm:text-xl text-justify">
                                Hello, my name is <b>Bagas Meganata</b>. I am third year Technology Information student at Brawijaya University. I&#39;m currently a part of BCC in Frontend Department division.
                                Now i focusing on <b><i>Frontend Web Development</i></b> and i have interest about <b>blockchain technology, Web 3.0 Development, and building Smart Contracts</b>.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="hidden lg:flex w-full justify-end items-center -mt-48">
                    <div className="absolute w-[500px] h-[500px]">
                        <Image
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            src={img}
                            alt="Gambar Ilus" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;