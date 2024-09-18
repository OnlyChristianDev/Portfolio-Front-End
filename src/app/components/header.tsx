"use client"

import { useState, useEffect } from "react";

export default function Header() {
      const [scrollY, setScrollY] = useState(0);
    
      const handleScroll = () => {
        setScrollY(window.scrollY); 
        console.log(window.scrollY)
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 h-14 flex justify-center items-center z-50 ${scrollY > 1? `bg-white/30 border-[1px] backdrop-blur-md ` : `bg-transparent`}`}>
                <ul className="flex justify-center items-center gap-3">
                    <li className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Início</li>
                    <li className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Habilidades</li>
                    <li className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Projetos</li>
                    <li className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-PrimaryPurple">Contato</li>
                </ul>
            </header>
        </>
    );
}
