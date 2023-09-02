"use client"
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ButtonUp = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const topPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <button
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={topPage}
                className='fixed right-4 sm:right-16 lg:right-10 bottom-12 bg-neutral-200 rounded-xl z-50 shadow-button'>
                <MdKeyboardDoubleArrowUp className='text-4xl text-turqoise' />
            </button>
        </>
    );
}

export default ButtonUp;