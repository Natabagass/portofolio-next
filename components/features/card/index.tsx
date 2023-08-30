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
                <div className="relative w-[125px] h-[125px]">
                    <Image
                        src={props.logo}
                        alt="Logo"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="text-white text-lg">{props.name}</motion.h1>
            </motion.div>
        </div>
    );
}

export default Cards;