"use client"
import Image from "next/image";
import { useEffect } from "react";

interface Props {
    name: string,
    img: string,
    duration: string,
    role: string,
    desc: string,
    responsibilities: { desc: string }[]
}

const CardWork = (props: Props) => {
    return (
        <div
            className="bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-6 lg:p-10 mt-10 rounded-3xl">
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row w-full items-center">
                    <div className="flex flex-row w-full items-center">
                        <div className="relative w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]">
                            <Image
                                src={props.img}
                                fill
                                className="rounded-full"
                                alt="logo-perusahaan"
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>
                        <div className="flex flex-col ml-3 sm:ml-5">
                            <h1 className="text-2xl mobile:text-3xl lg:text-4xl text-white font-semibold">{props.name}</h1>
                            <h3 className="text-base sm:text-lg lg:text-xl mt-1 sm:mt-3 text-redViolet font-medium">{props.duration}</h3>
                        </div>
                    </div>

                    <div className="justify-start md:justify-end flex w-full md:w-[80%] mt-5 md:mt-0">
                        <div className="bg-white p-2 rounded-xl bg-opacity-30 backdrop-blur-lg drop-shadow-lg shadow-md lg:shadow-xl">
                            <h1 className="text-white text-base font-medium lg:text-lg">{props.role}</h1>
                        </div>
                    </div>
                </div>
                <h2 className="my-5 text-lg sm:text-xl lg:text-2xl text-justify text-white">
                    {props.desc}
                </h2>
                <div>
                    {
                        props.responsibilities.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1 className="text-lg sm:text-xl text-justify lg:text-2xl text-white mt-3"> <span className="mr-3 lg:mr-5">-</span> {item.desc}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CardWork;