"use client"
import { useState, useEffect} from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ButtonDarkMode() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
    
        if (savedTheme === 'true') {
          setDarkMode(true);
          document.documentElement.classList.add('dark');
        }
      }, []); 

    const darkModeActive = () => {
        setDarkMode(darkMode => {
            const newDarkMode = !darkMode
            document.documentElement.classList.toggle('dark', newDarkMode);
            localStorage.setItem("theme", newDarkMode.toString())
            return newDarkMode
        })
    }

    return (
        <div onClick={darkModeActive} className={`top-0 left-0 w-16 pl-[2px] h-8 flex items-center bg-white rounded-full shadow-md transform cursor-pointer transition-transform duration-300 `}>
            <div className={`bg-PrimaryPurple cursor-pointer h-7 w-7 transition duration-300 rounded-full flex items-center justify-center ${darkMode == true? 'translate-x-8' : ''}`}> <FaSun className={`absolute text-white ${darkMode == true ? "hidden" : ""}`} /> <FaMoon className={`absolute text-white ${darkMode == true ? "" : "hidden"}`} /> </div>
        </div>
    );
} 