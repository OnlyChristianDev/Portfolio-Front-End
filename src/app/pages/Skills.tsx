"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SkillsIcon from "../components/SkillsIcon";
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faNodeJs, faFigma } from "@fortawesome/free-brands-svg-icons";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Element } from 'react-scroll';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.5 }); 

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Element name="Skills">
            <div ref={ref} className="flex flex-col justify-center items-center w-full h-[100vh]">
                <motion.h1
                    className="text-5xl font-bold dark:text-white"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    transition={{ duration: 0.5 }}
                >
                    Minhas <span className="text-PrimaryPurple"> habilidades. </span>
                </motion.h1>
            
                    <motion.div
                        className="flex gap-8 mt-10"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={containerVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <SkillsIcon iconProp={faHtml5} />
                        <SkillsIcon iconProp={faCss3Alt} />
                        <SkillsIcon iconProp={faJs} />
                        <SkillsIcon iconProp={faReact} />
                        <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
                            <SiTypescript className="text-[#f8f8ff] w-28 h-28" />
                        </div>
                        <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
                            <RiTailwindCssFill className="text-[#f8f8ff] w-28 h-28" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex gap-8 mt-5"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={containerVariants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
                            <SiMysql className="text-[#f8f8ff] w-28 h-28" />
                        </div>
                        <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
                            <RiNextjsFill className="text-[#f8f8ff] w-28 h-28" />
                        </div>
                        <SkillsIcon iconProp={faGitAlt} />
                        <SkillsIcon iconProp={faNodeJs} />
                        <SkillsIcon iconProp={faFigma} />
                </motion.div>
            </div>
        </Element>
    );
}
