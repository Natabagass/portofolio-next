"use client"
import Image from 'next/image';
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import foto from "@/img/fotodiri.jpg"
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="mt-28 mx-mobile sm:mx-tablet lg:mx-content">
            <div className="flex flex-col w-full">
                <hr className="h-[4px] w-full border-none bg-gradient-to-r from-darkClassicBlue via-turqoise to-darkClassicBlue" />

                <div className="flex flex-col mt-8 mb-10 md:mt-10 md:mb-20">
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="3000"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🤝<span className="bg-clip-text text-transparent bg-gradient-to-b from-redViolet to-pastelPurple/80 font-medium"> Let&#39;s Get in touch</span></h1>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="text-redViolet text-4xl sm:text-5xl md:text-6xl lg:text-8xl font font-semibold mt-16">Have any project ideas?</h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                        className="text-redViolet text-4xl sm:text-5xl md:text-6xl lg:text-8xl font font-semibold">Ask Something?</h2>

                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="2000"
                        className="mt-20">
                        <h3 className="text-lightGold text-xl sm:text-2xl font-medium">Contact me via</h3>
                        <div className='flex flex-row items-center'>
                            <div className='relative w-[80px] h-[80px] mobile:w-[100px] mobile:h-[100px] sm:w-[125px] sm:h-[125px] mr-5 mt-5'>
                                <Image
                                    src={foto}
                                    alt='Foto diri'
                                    className='rounded-full '
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    fill
                                />
                            </div>
                            <div className='flex flex-col'>
                                <Link target="_blank" href={'https://www.linkedin.com/in/natabagass/'} className='flex flex-row text-lightGold font-medium items-center text-sm mobile:text-lg sm:text-xl'><BiLogoLinkedin className="mr-3" /> Bagas Meganata</Link>
                                <Link target="_blank" href={'mailto:meganatabagas@gmail.com'} className='flex flex-row text-lightGold font-medium items-center text-sm mobile:text-lg sm:text-xl'><BiLogoGmail className="mr-3" /> meganatabagas@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;