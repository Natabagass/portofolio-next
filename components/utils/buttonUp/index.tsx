"use client"
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ButtonUp = () => {
    const topPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <motion.button
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                onClick={topPage}
                className='fixed right-4 sm:right-16 lg:right-10 bottom-12 bg-neutral-200 rounded-xl z-50 shadow-button'>
                <MdKeyboardDoubleArrowUp className='text-4xl text-turqoise' />
            </motion.button>
        </>
    );
}

export default ButtonUp;