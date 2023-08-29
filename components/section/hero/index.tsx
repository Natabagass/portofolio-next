"use client"
import Image from "next/image";
import img from "@/img/2.jpg"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center h-screen mt-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="relative w-[300px] h-[300px]">
                <Image
                    src={img}
                    alt="Char"
                    className="rounded-full shadow-background"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </motion.div>
            <div className="text-white w-full flex justify-center mt-8 flex-col items-center">
                <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.8, delay: 0.8 }}
                    className="font-medium flex text-left">Hello there!</motion.h3>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5, }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.8, delay: 1.1 }}
                    className="text-2xl mb-10 mt-5 font-semibold items-end flex flex-row">I&#39;m&nbsp;
                    <div className="text-6xl text-redViolet">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.pauseFor(2000)
                                    .typeString('Bagas Meganata')
                                    .changeDeleteSpeed(50)
                                    .pauseFor(2000)
                                    .deleteChars(14)
                                    .typeString('a Frontend Developer')
                                    .changeDeleteSpeed(50)
                                    .pauseFor(2000)
                                    .start();
                            }}
                            options={{
                                loop: true,
                                deleteSpeed: 200,
                            }}
                        />
                    </div>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.8, delay: 1.4 }}
                    className="text-center text-xl w-[30%]">
                    A human who likes <b>Frontend Development</b> using <i>React</i> and <i>Next</i> for the framework. Loves about <i>blockchain</i> technology and still learn more about <i>solidity</i>.
                </motion.p>
            </div>
        </div>
    );
}

export default Hero;