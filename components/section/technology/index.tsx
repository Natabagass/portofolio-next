"use client"
import { data } from "@/dummy";
import Cards from "@/features/card";
import { motion } from "framer-motion";

const Technology = () => {
    return (
        <div className="mx-content font-jakartaSans mt-80">
            <div className="flex flex-col w-full">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}>
                    <span
                        className="relative mt-2 inline-block sm:mt-0">
                        <h1 className="text-redViolet text-6xl font-semibold z-20">💻 Technology I Used</h1>
                        <span className="title-highlight absolute left-[85px] -bottom-1 -z-10 hidden h-[15px] w-[250px] max-[350px]:w-[220px] min-[375px]:block sm:bottom-2 sm:w-[320px] md:bottom-1 lg:h-[10px] lg:w-[530px]"></span>
                    </span>

                    <h3 className="text-white mt-10 text-2xl w-[70%]">
                        Here is technology I used to develope right now!
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="w-full grid grid-cols-4 bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-2 rounded-3xl mt-5">
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
                </motion.div>
            </div>
        </div>
    );
}

export default Technology;