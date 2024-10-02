"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import ButtonDarkMode from "./buttonDarkMode";
import { scrollToSkills, scrollToProjects, scrollToContactMe, ScrollToTopFunction } from "../utils/ScrollFunctions";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
             <motion.header
                className={`fixed top-0 left-0 right-0 h-14 flex justify-center items-center z-50 
                    ${scrollY > 1 ? `bg-white/30 dark:bg-[#13131F]/30 border-b-[1px] border-white backdrop-blur-md dark:border-gray-900` : `bg-transparent`} 
                    dark:text-white`}
                initial="hidden" 
                animate={scrollY > 1 ? "visible" : "visible"}
                variants={headerVariants} 
                transition={{ duration: 0.3 }}
            >
                <ul className="flex justify-center items-center gap-3">
                    <li onClick={ScrollToTopFunction} className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Início</li>
                    <li onClick={scrollToSkills} className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Habilidades</li>
                    <li onClick={scrollToProjects} className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Projetos</li>
                    <li onClick={scrollToContactMe} className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Contato</li>
                </ul>
                <div className="absolute right-4">
                    <ButtonDarkMode />
                </div>
            </motion.header>
        </div>
           
    );
}
