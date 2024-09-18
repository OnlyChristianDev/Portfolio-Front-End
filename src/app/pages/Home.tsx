"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import ImageChristian from "../Images/Chris.jpg"
import Texts from "../components/texts"
import SocialMedias from '../components/SocialMedias';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
    return (
    <>
    <div className='w-full mt-16 h-screen flex flex-col items-center justfy-center'>
        <Image
            src={ImageChristian}
            alt="Descrição da imagem" 
            className='rounded-[50%] shadow-2xl border-[1px] border-black mt-10 h-36 w-36'
        />
        <h2 className='font-extrabold mt-3 mb-[-30px]'>
            Olá, Meu nome é <span className="text-PrimaryPurple"> Christian.   
            <motion.span
            initial={{ rotate: -15 }}
            animate={{ rotate: 65 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.0 }}
            style={{ display: 'inline-block' }} 
          >
            👋
          </motion.span> </span> 
        </h2>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[5.56rem] mb-[-50px] font-black'> 
                DESENVOLVEDOR 
            </h1>      
            <h1 className='text-[5.56rem] font-black'>
                <Texts Portugues1={"FRONT-END"} Portugues2={'WEB'} />
            </h1>
        </div>

        <p className='pl-40 pr-40 text-center'>
            Sou um <span className='text-PrimaryPurple'> desenvolvedor frontend  </span>apaixonado por criar interfaces web intuitivas e visualmente atraentes. 
            Combinando habilidades em desenvolvimento web e design <span className='text-PrimaryPurple'> UI/UX </span>,
            tenho como objetivo proporcionar experiências digitais únicas e envolventes.
        </p>
        <a href="/Curriculo.pdf" download><button className='bg-PrimaryPurple mt-5 text-white rounded-3xl p-2 pr-5 pl-5 transition-transform duration-300 transform hover:scale-105 hover:bg-gradient-hover'>
            Download CV
        </button> </a>
        <div className='flex text-PrimaryPurple fa-2x cursor-pointer gap-4 mt-4'>
            <SocialMedias linkProps='mailto:Christiandeveloper123@gmail.com' iconProps={faEnvelope}/>
            <SocialMedias linkProps='https://github.com/OnlyChristianDev' iconProps={faGithub}/>
            <SocialMedias linkProps='https://www.linkedin.com/in/christiangdev/' iconProps={faLinkedin}/>
        </div>
    </div>
    </>
  );
}
