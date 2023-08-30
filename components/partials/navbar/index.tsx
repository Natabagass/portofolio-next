"use client";
import { HoverUnderline } from "@/features/underline";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            setIsScrolled(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div 
        initial={{ y: -100, opacity: 0.5 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
            className={`${isScrolled ? 'bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg' : 'bg-white'} text-gold z-10 transition-all duration-300 top-0 fixed mt-5 font-jakartaSans font-semibold w-[50%] rounded-full items-center flex justify-center`}>
            <div className={`w-full rounded-full transition-all duration-500`}>
                <ul className="items-center w-full flex justify-around px-2 py-3">
                    <li>
                        <HoverUnderline>
                            <Link href="/">
                                Home
                            </Link>
                        </HoverUnderline>
                    </li>
                    <li>
                        <HoverUnderline>
                            <Link href="#about">
                                About
                            </Link>
                        </HoverUnderline>
                    </li>
                    <li>
                        <HoverUnderline>
                            <Link href="#techStack">
                                Technology
                            </Link>
                        </HoverUnderline>
                    </li>
                    <li>
                        <HoverUnderline>
                            <Link href="#project">
                                Project
                            </Link>
                        </HoverUnderline>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}

export default Navbar;