import { useTypewriter, Cursor } from 'react-simple-typewriter';

interface Props {
    Portugues1: string;
  Portugues2: string;
}
export default function Texts({Portugues1, Portugues2} : Props) {
  const [text] = useTypewriter({
    words: [`${Portugues1}`, `${Portugues2}` ],
    loop: true,
    typeSpeed: 100,   
    deleteSpeed: 40,   
    delaySpeed: 1000,  
  });

  return (
    <div>
      <h1>{text}<Cursor /></h1>
    </div>
  );
}
