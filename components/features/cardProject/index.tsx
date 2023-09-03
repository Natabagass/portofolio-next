"use client"
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
    nama: string,
    desc: string,
    technology: { logo: string }[],
    github: string,
    deploy: string
}

const CardProject = (props: Props) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div
            className="bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-6 lg:p-10 mt-10 rounded-3xl min-h-[850px] sm:min-h-[800px] lg:min-h-0">
            <div className="flex flex-col">
                <h1 className="text-3xl lg:text-4xl font-bold text-redViolet">{props.nama}</h1>
                <p className="text-lg sm:text-xl text-white font-medium mt-5">{props.desc}</p>

                <Link href={props.deploy} target="_blank" className={`${props.deploy === '' ? 'hidden' : 'flex flex-col'} w-full mobile:w-[90%] sm:w-[65%] lg:w-[50%] xl:w-[35%] mt-10`}>
                    <div className="flex flex-row p-6 bg-gradient-to-r to-black/30 from-darkClassicBlue rounded-lg items-center">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row items-center">
                                <div className="relative mr-2">
                                    <div className="absolute h-[10px] w-[10px] animate-ping rounded-full bg-greenLight" />
                                    <div className="h-[10px] w-[10px] rounded-full bg-greenLight" />
                                </div>
                                <h3 className="text-greenLight rounded-xl text-base mobile:text-lg sm:text-2xl font-medium flex items-center flex-row">Live in production</h3>
                            </div>
                            <h1 className="text-white text-2xl mobile:text-3xl lg:text-4xl font-bold mt-3">{props.nama}</h1>
                        </div>
                        <div className="bg-black p-2 sm:p-3 items-center rounded-lg shadow-xl hover:scale-110 scale-100">
                            <FiArrowUpRight className="text-2xl text-white" />
                        </div>
                    </div>
                </Link>

                <div className="mt-10 ml-0 sm:ml-8 flex flex-col">
                    <Link target="_blank" href={props.github}>
                        <h1 className="text-white text-2xl sm:text-3xl font-medium">{props.nama}</h1>
                        <h2 className="flex flex-row mt-2 text-white/80 text-lg sm:text-xl items-center">
                            on&nbsp; <FaGithub /> &nbsp;github.com
                        </h2>
                    </Link>
                </div>

                <div className="flex flex-col mt-10 sm:mt-16">
                    <h1 className="text-redViolet font-semibold text-3xl lg:text-4xl">Tech Stack Used :</h1>
                    <div className="flex flex-row mt-3">
                        {
                            props.technology.map((sub, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="relative w-[80px] h-[80px] mobile:w-[100px] mobile:h-[100px] md:w-[125px] md:h-[125px]">
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
        </div>
    );
}

export default CardProject;