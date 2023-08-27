"use client"
import Image from "next/image";
import img from "@/img/2.jpg"
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center h-screen mt-10">
            <div className="relative w-[300px] h-[300px]">
                <Image
                    src={img}
                    alt="Char"
                    className="rounded-full shadow-background"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
            <div className="text-white mt-8 w-full flex justify-center flex-col items-center">
                <h3 className="font-medium flex text-left">Hello there!</h3>
                <h1 className="text-2xl my-5 font-semibold">My name is <span className="font-bold text-5xl text-redViolet">Bagas Meganata</span></h1>
                <p className="text-center text-xl w-[30%]">
                    A human who likes <b>Frontend Development</b> using <i>React</i> and <i>Next</i> for the framework. Loves about <i>blockchain</i> technology and still learn more about <i>solidity</i>.
                </p>
            </div>
        </div>
    );
}

export default Hero;