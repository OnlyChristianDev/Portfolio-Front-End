import SkillsIcon from "../components/SkillsIcon"
import { faHtml5, faCss3Alt, faFigma, faJs, faReact, faGitAlt, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export default function Skills(){
    return(
        <>
        <div className="flex flex-col items-center w-full h-screen">
                <h1 className="text-5xl font-bold">My <span className="text-PrimaryPurple"> skills. </span></h1>
                <div className="flex gap-8 mt-10">
                    <SkillsIcon iconProp={faHtml5} />
                    <SkillsIcon iconProp={faCss3Alt} />
                    <SkillsIcon iconProp={faJs} />
                    <SkillsIcon iconProp={faReact} />
                </div>
                <div className="flex gap-8 mt-5">
                    <SkillsIcon iconProp={faFigma} />
                    <SkillsIcon iconProp={faFigma} />
                    <SkillsIcon iconProp={faGitAlt} />
                    <SkillsIcon iconProp={faNodeJs} />
                </div>
            </div>
        </>
    )
}