"use client"
import { data } from "@/dummy/technology";
import Cards from "@/features/card";
import { motion } from "framer-motion";

const Technology = () => {
    return (
        <div className="mx-mobile sm:mx-tablet lg:mx-content  font-jakartaSans mt-32 lg:mt-60">
            <div className="flex flex-col w-full">
                <div className="z-20">
                    <span className="relative mt-2 inline-block sm:mt-0">
                        <h1 className="text-redViolet text-4xl sm:text-5xl lg:text-6xl font-semibold z-20 flex flex-row"><span
                            data-aos="fade-up-right"
                            data-aos-duration="1000"
                        >💻</span>&nbsp;Technology I Used</h1>
                        <span className="title-highlight absolute left-[85px] -bottom-1 -z-10 hidden h-[15px] w-[250px] sm:flex sm:bottom-2 sm:w-[320px] md:bottom-1 lg:h-[10px] lg:w-[530px]"></span>
                    </span>

                    <h3 className="text-white mt-10 text-2xl w-full lg:w-[70%] text-justify">
                        Here is technology I used to develope right now!
                    </h3>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-2 rounded-3xl mt-5">
                    {
                        data.map((datas, index) => {
                            return (
                                <Cards
                                    key={index}
                                    name={datas.name}
                                    logo={datas.logo}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Technology;