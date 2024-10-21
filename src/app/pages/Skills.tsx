"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DiHtml5, DiJsBadge, DiReact } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs } from "react-icons/si";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { Element } from 'react-scroll';
import SkillsIcon from '@/components/SkillsIcon';
import { FaGitAlt, FaFigma } from "react-icons/fa6";

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
            <div ref={ref} className="flex h-[100%] mt-52 flex-col items-center w-full justify-center overflow-hidden">
                <motion.h1
                    className="text-5xl mb-10 mt-10 font-bold text-center dark:text-white max-sm:text-[8vw]"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    transition={{ duration: 0.5 }}
                >
                    Minhas <span className="text-PrimaryPurple"> habilidades. </span>
                </motion.h1>
                <motion.div
                className='gap-5 flex flex-col'
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={containerVariants}
                    transition={{ duration: 0.5 }}
                >
                    <div className='max-sm:flex gap-5'>
                        <div className='flex gap-5 max-sm:flex-col'>
                            <SkillsIcon Icon={DiHtml5} />
                            <SkillsIcon Icon={IoLogoCss3} />
                            <SkillsIcon Icon={DiJsBadge} />
                            <SkillsIcon Icon={SiTypescript} />
                        </div>
                        <div className='flex gap-5 max-sm:flex-col sm:mt-5'>
                            <SkillsIcon Icon={DiReact} />
                            <SkillsIcon Icon={SiNextdotjs} />
                            <SkillsIcon Icon={SiTailwindcss} />
                            <SkillsIcon Icon={FaGitAlt} />
                        </div>
                    </div>
                    <div className='sm:flex gap-5 items-center justify-center'>
                        <div className='flex gap-5'>
                            <SkillsIcon Icon={IoLogoNodejs} />
                            <SkillsIcon Icon={SiMysql} />
                        </div>
                        <div className='flex items-center justify-center max-sm:mt-5'>
                            <SkillsIcon Icon={FaFigma} />
                        </div>
                       
                    </div>
                </motion.div>
            </div>
        </Element>
    );
}
