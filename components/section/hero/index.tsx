"use client"
import Image from "next/image";
import img from "@/img/2.jpg"
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="flex flex-col w-full justify-center items-center h-screen mt-10 ">
            <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
                <Image
                    src={img}
                    alt="Char"
                    className="rounded-full shadow-background"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
            <div className="text-white w-full flex justify-center mt-8 flex-col items-center">
                <h3
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className="font-medium flex text-left">Hello there!</h3>
                <h1
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="1500"
                    className="text-2xl mb-5 lg:mb-10 mt-5 font-semibold items-end flex flex-row">I&#39;m&nbsp;
                    <div className="text-3xl sm:text-5xl lg:text-6xl text-center text-redViolet">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.pauseFor(2500)
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
                </h1>
                <p
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="2000"
                    className="text-center text-lg lg:text-xl w-[85%] sm:w-[70%] lg:w-[50%] xl:w-[30%]">
                    A human who likes <b>Frontend Development</b> using <i>React</i> and <i>Next</i> for the framework. Loves about <i>blockchain</i> technology and still learn more about <i>solidity</i>.
                </p>
            </div>
        </div>
    );
}

export default Hero;