"use client"
import Image from "next/image";
import img from "@/img/Saly-19.png"
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="mx-content font-jakartaSans text-white mt-40">
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-redViolet text-5xl font-semibold">About</motion.h1>
            <div className="flex flex-row w-full justify-between mt-10 items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="relative flex lg:w-[85%] xl:w-full">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex flex-col lg:mx-0 mx-auto bg-darkViolet rounded-3xl">
                        <div className="bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-6 rounded-3xl w-full flex mr-3 -mt-3 -ml-3 mb-3 h-fit">
                            <p>
                                Hello, my name is <b>Bagas Meganata</b>. I am third year Technology Information student at Brawijaya University. I&#39;m currently a part of BCC in Frontend Department division.
                                Now i focusing on <b><i>Frontend Web Development</i></b> and i have interest about <b>blockchain technology, Web 3.0 Development, and building Smart Contracts</b>.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex w-full justify-end items-center -mt-48">
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