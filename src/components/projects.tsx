import { MdContacts, MdQuiz } from 'react-icons/md';
import { CiCalculator2 } from 'react-icons/ci';
import { FaLaptopCode } from 'react-icons/fa';
import { TiWeatherDownpour } from 'react-icons/ti';
import { FaShoppingBag } from "react-icons/fa";
import { GiCardJoker } from "react-icons/gi";

const projects = [
    {
        title: (
            <>
                Gerenciador <br /> de Contatos
            </>
        ),
        description: 'Um sistema web desenvolvido especialmente para gerenciar contatos telefônicos.',
        icon: <MdContacts className=' text-8xl text-white' />,
        gradient: 'from-green-500 to-blue-500',
        link: "https://gerenciador-de-contatos-six.vercel.app/"
    },
    {
        title: (
            <>
                RETROVE
            </>
        ),
        description: 'Retrove é uma plataforma de e-commerce fictícia que permite aos usuários vender itens usados,',
        icon: <FaShoppingBag className='text-8xl text-white' />,
        gradient: 'from-gray-500 to-black',
        link: "https://retrove.vercel.app/"
    },
    {
        title: (
            <>
                Calculadora <br /> de IMC
            </>
        ),
        description: 'Sistema web para calcular o índice de massa corpórea dos usuários.',
        icon: <CiCalculator2 className='text-8xl text-white' />,
        gradient: 'from-purple-500 to-pink-500',
        link: "https://imc-calculator-steel.vercel.app/"
    },
    {
        title: 'Quiz interativo',
        description: 'Quiz interativo com perguntas acerca da linguagem de programação JavaScript.',
        icon: <MdQuiz className='text-8xl text-white' />,
        gradient: 'from-yellow-500 to-red-500',
        link: "https://quiz-in-java-script.vercel.app/"
    },
    {
        title: 'Virtual-R',
        description: 'Site desenvolvido com React e Tailwind CSS. Projetado para ser visualmente atraente e funcional em diversos dispositivos e tamanhos de tela.',
        icon: <FaLaptopCode className='text-8xl text-white' />,
        gradient: 'from-red-500 to-red-900',
        link: "https://virtualr-blond.vercel.app/"
    },
    {
        title: 'Weather Project',
        description: 'Aplicação web que exibe a previsão do tempo para uma localização específica. Desenvolvido com HTML, CSS e JavaScript, utiliza uma API para obter dados meteorológicos.',
        icon: <TiWeatherDownpour className='text-8xl text-white' />,
        gradient: 'from-blue-500 to-indigo-500',
        link: "https://weather-project-inky-two.vercel.app/"
    },
    {
        title: 'Jokes Card',
        description: 'Este é um projeto que apresenta um sistema interativo de cartas que exibem piadas e suas respostas. Ao clicar nas cartas, elas giram, revelando a piada ou a resposta no verso.',
        icon: <GiCardJoker className='text-8xl text-white' />,
        gradient: 'from-pink-900 to-blue-900',
        link: "https://jokes-card.vercel.app/"
    }
];

export default projects;
