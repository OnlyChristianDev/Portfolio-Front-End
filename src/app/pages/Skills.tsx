import SkillsIcon from "../components/SkillsIcon"
import { faHtml5, faCss3Alt, faFigma, faJs, faReact, faGitAlt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export default function Skills(){
    return(
        <>
        <div className="flex flex-col items-center w-full h-[80vh]">
            <h1 className="text-5xl font-bold">Minhas <span className="text-PrimaryPurple"> habilidades. </span></h1>               
                <div className="flex gap-8 mt-10">
                    <SkillsIcon iconProp={faHtml5} />
                    <SkillsIcon iconProp={faCss3Alt} />
                    <SkillsIcon iconProp={faJs} />
                    <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
                       <SiTypescript className="text-[#f8f8ff] w-28 h-28" />
                    </div>
                    <SkillsIcon iconProp={faReact} />
                </div>
                <div className="flex gap-8 mt-5">
                    <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
                       <SiMysql className="text-[#f8f8ff] w-28 h-28" />
                    </div>
                    <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
                        <RiNextjsFill className="text-[#f8f8ff] w-28 h-28"/>
                    </div>
                    <SkillsIcon iconProp={faFigma} />
                    <SkillsIcon iconProp={faGitAlt} />
                    <SkillsIcon iconProp={faNodeJs} />
                </div>
            </div>
        </>
    )
}