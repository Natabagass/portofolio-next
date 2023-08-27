"use client";
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
        <div className={`${isScrolled ? 'bg-white bg-opacity-30 backdrop-blur-lg drop-shadow-lg' : 'bg-white' } text-gold z-10 transition-all duration-150 top-0 fixed shadow-xl mt-5 font-jakartaSans font-semibold w-[50%] rounded-full items-center flex justify-center`}>
            <div className={`w-full rounded-full transition-all duration-500`}>
                <ul className="items-center w-full flex justify-around px-2 py-3">
                    <li>
                        <Link href="#hero">
                            Hero
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#techStack">
                            Technology
                        </Link>
                    </li>
                    <li>
                        <Link href="#project">
                            Project
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;