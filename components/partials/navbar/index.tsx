"use client";
import { HoverUnderline } from "@/features/underline";
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
        <div 
            className={`${isScrolled ? 'bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg text-lightGold' : 'bg-white text-gold'} z-10 transition-all duration-300 top-0 fixed mt-5 font-jakartaSans font-semibold w-[95%] lg:w-[50%] rounded-full items-center flex justify-center`}>
            <div className={`w-full rounded-full transition-all duration-500`}>
                <ul className="items-center w-full flex justify-around px-2 py-3">
                    <li>
                        <HoverUnderline>
                            <Link className="lg:text-base text-xs mobile:text-sm" href="/">
                                Home
                            </Link>
                        </HoverUnderline>
                    </li>
                    <li>
                        <HoverUnderline>
                            <Link className="lg:text-base text-xs mobile:text-sm" href="#about">
                                About
                            </Link>
                        </HoverUnderline>
                    </li>
                    <li>
                        <HoverUnderline>
                            <Link className="lg:text-base text-xs mobile:text-sm" href="#work-experience">
                                Experience
                            </Link>
                        </HoverUnderline>
                    </li>
                    <li>
                        <HoverUnderline>
                            <Link className="lg:text-base text-xs mobile:text-sm" href="#project">
                                Project
                            </Link>
                        </HoverUnderline>
                    </li>
                    <li>
                        <HoverUnderline>
                            <Link className="lg:text-base text-xs mobile:text-sm" href="#tech-stack">
                                Technology
                            </Link>
                        </HoverUnderline>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;