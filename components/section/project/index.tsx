"use client"
import { data } from "@/dummy/project";
import CardProject from "@/features/cardProject";
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Project = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="mx-mobile sm:mx-tablet lg:mx-content font-jakartaSans mt-32 lg:mt-80">
            <div className="flex flex-col w-full">
                <span className="relative mt-2 inline-block sm:mt-0 z-">
                    <h1 className="text-redViolet text-4xl sm:text-5xl lg:text-6xl font-semibold z-20 flex flex-row"><span
                        data-aos="fade-up-right"
                        data-aos-duration="1000"
                    >🚀</span>&nbsp;Highlighted Project</h1>
                    <span className="title-highlight absolute left-[80px] -bottom-1 -z-10 hidden h-[15px] w-[250px] sm:flex sm:bottom-2 sm:w-[320px] md:bottom-1 lg:h-[10px] lg:w-[560px]"></span>
                </span>

                <h3 className="text-white mt-10 text-lg sm:text-xl lg:text-2xl w-full lg:w-[70%] text-justify z-20">
                    I&#39;ve worked on a variety of projects, ranging from small MVPs to full-scale applications, also developed a wide array of features
                    and functionalities in projects.
                </h3>

                <div className="lg:flex flex-col hidden">
                    {
                        data.map((item, index) => {
                            return (
                                <CardProject
                                    key={index}
                                    nama={item.nama}
                                    github={item.github}
                                    deploy={item.deploy}
                                    technology={item.technology}
                                    desc={item.desc}
                                />
                            )
                        })
                    }
                </div>

                <div className="lg:hidden flex">
                    <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                        className="mySwiper">
                        {
                            data.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <CardProject
                                            nama={item.nama}
                                            github={item.github}
                                            deploy={item.deploy}
                                            technology={item.technology}
                                            desc={item.desc}
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    );
}

export default Project;