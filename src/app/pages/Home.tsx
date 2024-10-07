"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import ImageChristian from "../Images/Chris.jpg"
import Texts from "../components/Texts"
import SocialMedias from '../components/SocialMedias';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  return (
    <motion.div 
      className='w-full h-screen mt-4 min-h-screen flex flex-col items-center justify-center'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        variants={itemVariants}
        transition={{ delay: 0.2 }}
      >
        <Image
          src={ImageChristian}
          alt="Foto de Christian" 
          className='rounded-[50%] shadow-2xl border-[1px] border-black mt-10 h-36 w-36 dark:border-white max-sm:h-[23vw] max-sm:min-w-[130px] max-sm:min-h-[130px] max-sm:w-[23vw]'
        />
      </motion.div>
      <h2 className='font-extrabold mt-3 mb-[-30px] text-black dark:text-white max-sm:mb-[-3vw] max-sm:text-[2.7vw] max-md:text-[2.3vw] max-md:mb-[-3vw] max-lg:mb-[-3vw]'>
        Olá, Meu nome é <span className="text-PrimaryPurple"> Christian.   
          <motion.span
            initial={{ rotate: -15 }}
            animate={{ rotate: 65 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.0 }}
            style={{ display: 'inline-block' }} 
          >
            👋
          </motion.span> 
        </span> 
      </h2>
      <div className='flex flex-col w-full items-center justify-center'>
        <motion.h1
          className='text-[6rem] mb-[-60px] max-sm:text-[10vw] max-sm:mb-[-5vw] max-md:mb-[-6vw] max-md:text-[10vw] max-lg:mb-[-6vw] max-lg:text-[10vw] font-black text-black dark:text-white w-full text-center'
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        > 
          DESENVOLVEDOR 
        </motion.h1>      
        <motion.h1 
          className='text-[6rem] max-sm:text-[10vw] max-md:text-[10vw] max-lg:text-[10vw] font-black w-full text-center'
          variants={itemVariants}
          transition={{ delay: 0.6 }}
        >
          <Texts Portugues1={"FRONT-END"} Portugues2={'WEB'} />
        </motion.h1>
      </div>
      <div className='w-[70vw] max-sm:w-[90vw] max-mb:w-[90vw] max-lg:w-[90vw] '>
        <motion.p 
          className=' text-center text-black dark:text-white'
          variants={itemVariants}
          transition={{ delay: 0.8 }}
        >
          Sou um <span className='text-PrimaryPurple'> desenvolvedor frontend  </span> apaixonado por criar interfaces web intuitivas e visualmente atraentes. 
          Combinando habilidades em desenvolvimento web e design <span className='text-PrimaryPurple'> UI/UX </span>,
          tenho como objetivo proporcionar experiências digitais únicas e envolventes.
        </motion.p>
      </div>
      <a href="/Curriculo.pdf" download> 
        <motion.button 
          className='bg-PrimaryPurple mt-5 text-white rounded-3xl p-2 pr-5 pl-5 transition-transform duration-300 transform hover:scale-105 hover:bg-gradient-hover'
          variants={itemVariants}
          transition={{ delay: 1.0 }}
        >
          Download CV
        </motion.button> 
      </a>
      <div className='flex text-PrimaryPurple fa-2x cursor-pointer gap-4 mt-4'>
        <SocialMedias linkProps='mailto:Christiandeveloper123@gmail.com' iconProps={faEnvelope}/>
        <SocialMedias linkProps='https://github.com/OnlyChristianDev' iconProps={faGithub}/>
        <SocialMedias linkProps='https://www.linkedin.com/in/christiangdev/' iconProps={faLinkedin}/>
      </div>
    </motion.div>
  );
}
