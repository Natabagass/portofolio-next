"use client"
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion";

interface Props {
    nama: string,
    desc: string,
    technology: { logo: string }[],
    github: string,
    deploy: string
}

const CardProject = (props: Props) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-10 mt-10 rounded-3xl">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-redViolet">{props.nama}</h1>
                <p className="text-xl text-white font-medium mt-5">{props.desc}</p>

                <Link href={props.deploy} className={`${props.deploy === '' ? 'hidden' : 'flex flex-col'} w-[35%] mt-10`}>
                    <div className="flex flex-row p-6 bg-gradient-to-r to-black/30 from-darkClassicBlue rounded-lg items-center">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row items-center">
                                <div className="relative mr-2">
                                    <div className="absolute h-[10px] w-[10px] animate-ping rounded-full bg-greenLight" />
                                    <div className="h-[10px] w-[10px] rounded-full bg-greenLight" />
                                </div>
                                <h3 className="text-greenLight rounded-xl text-2xl font-medium flex items-center flex-row">Live in production</h3>
                            </div>
                            <h1 className="text-white text-4xl font-bold mt-3">{props.nama}</h1>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="bg-black p-3 items-center rounded-lg shadow-xl">
                            <FiArrowUpRight className="text-2xl text-white" />
                        </motion.div>
                    </div>
                </Link>

                <div className="mt-10 ml-8 flex flex-col">
                    <h1 className="text-white text-3xl font-medium">{props.nama}</h1>
                    <Link href={props.github} className="flex flex-row mt-2 text-white/80 text-xl items-center">
                        on&nbsp; <FaGithub /> &nbsp;github.com
                    </Link>
                </div>

                <div className="flex flex-col mt-16">
                    <h1 className="text-redViolet font-semibold text-4xl">Tech Stack Used :</h1>
                    <div className="flex flex-row mt-3">
                        {
                            props.technology.map((sub, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="relative w-[125px] h-[125px]">
                                        <Image
                                            src={sub.logo}
                                            alt="logo"
                                            fill
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CardProject;