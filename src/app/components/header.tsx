export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 h-14 flex justify-center items-center z-50">
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
