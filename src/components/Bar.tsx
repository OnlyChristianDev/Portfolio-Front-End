import { scrollToSkills, ScrollToTopFunction, scrollToProjects, scrollToContactMe } from "@/app/utils/ScrollFunctions";

interface closeBarInterface {
closeBar : () => void
}

export default function Bar({ closeBar } : closeBarInterface) {
    return (
        <div className="fixed z-40 flex items-center justify-center top-0 left-0 h-screen w-screen bg-black/95">
            <ul className="flex gap-2 items-center justify-center flex-col">
                <li onClick={() => { ScrollToTopFunction(); closeBar(); }} className="cursor-pointer font-bold text-whitet text-2xl">Início</li>
                <li onClick={() => { scrollToSkills(); closeBar(); }} className="cursor-pointer font-bold text-white text-2xl">Habilidades</li>
                <li onClick={() => { scrollToProjects(); closeBar(); }} className="cursor-pointer font-bold text-white text-2xl">Projetos</li>
                <li onClick={() => { scrollToContactMe(); closeBar(); }} className="cursor-pointer font-bold text-white font text-2xl">Contato</li>
            </ul>
        </div>
    );
}
