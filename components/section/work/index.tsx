"use client"
import { data } from "@/dummy/work";
import CardWork from "@/features/cardWork";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <div className="mx-mobile sm:mx-tablet lg:mx-content font-jakartaSans mt-32 lg:mt-80 z-20">
            <div className="flex flex-col w-full z-20">
                <span className="relative mt-2 inline-block sm:mt-0">
                    <h1 className="text-redViolet text-4xl sm:text-5xl lg:text-6xl font-semibold z-20 flex flex-row">
                        <span
                            data-aos="fade-up-right"
                            data-aos-duration="1000"
                        >💼</span>&nbsp;Work Experiences</h1>
                    <span className="title-highlight sm:flex absolute left-[75px] lg:left-[90px] -bottom-1 -z-10 hidden sm:h-[10px] md:h-[15px] w-[250px] sm:bottom-1 sm:w-[410px] md:w-[400px] md:-bottom-0 lg:bottom-1 lg:h-[10px] lg:w-[530px]"></span>
                </span>

                <h3 className="text-white mt-10 text-lg sm:text-xl lg:text-2xl w-full lg:w-[70%] text-justify">
                    I previously worked as a freelancer and also as an intern for a company in the web development division as a frontend developer</h3>
            </div>

            <div className="z-20">
                {
                    data.map((datas, index) => {
                        return (
                            <CardWork
                                key={index}
                                desc={datas.desc}
                                duration={datas.duration}
                                name={datas.name}
                                img={datas.img}
                                role={datas.role}
                                responsibilities={datas.responsibilites}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Work;