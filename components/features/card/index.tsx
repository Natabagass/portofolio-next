"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
    name: string,
    logo: string
}

const Cards = (props: Props) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="700"
            className="flex flex-row w-full justify-center font-jakartaSans">
            <div className="flex flex-col scale-100 hover:scale-110 items-center px-1 py-6">
                <div className="relative w-[125px] h-[125px]">
                    <Image
                        src={props.logo}
                        alt="Logo"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
                <h1
                    className="text-white text-lg">{props.name}</h1>
            </div>
        </div>
    );
}

export default Cards;