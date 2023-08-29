"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Props {
    name: string,
    logo: string
}

const Cards = (props: Props) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <div className="flex flex-row w-full justify-center font-jakartaSans">
            <motion.div
                layout
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                animate={isHover ? { scale: 1.1 } : { scale: 1 }}
                className="flex flex-col items-center px-1 py-6">
                <div className="relative w-[150px] h-[150px]">
                    <Image
                        src={props.logo}
                        alt="Logo"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
                <h1 className="text-white text-lg">{props.name}</h1>
            </motion.div>
        </div>
    );
}

export default Cards;