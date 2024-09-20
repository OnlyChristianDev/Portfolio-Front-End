import IconTalking from "../components/IconTalking";
import { BiLogoGmail} from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt  } from "react-icons/fa";
import Contacts from "../components/Contacts";


export default function ContactMe(){
    return(
        <>
            <div className='w-full mt-16 h-screen flex flex-col items-center justfy-center'>
                <h1 className="text-5xl font-bold mb-10">
                    Entre <span className="text-PrimaryPurple">em contato.</span>
                </h1>
                <div className="flex items-center justify-center gap-10">
                    <div>
                        <IconTalking />
                    </div>    
                    <div>
                        <Contacts IconProps={BiLogoGmail} />
                        <BiLogoGmail className="text-PrimaryPurple icon transition duration-300 ease-in-out cursor-pointer text-7xl hover:text-SecondPurple hover:scale-110" />
                        <FaGithub className="text-PrimaryPurple icon transition duration-300 ease-in-out cursor-pointer text-7xl hover:text-SecondPurple hover:scale-110" />
                        <FaPhoneAlt className="text-PrimaryPurple icon transition duration-300 ease-in-out cursor-pointer text-7xl hover:text-SecondPurple hover:scale-110" />
                        <BiLogoGmail className="text-PrimaryPurple icon transition duration-300 ease-in-out cursor-pointer text-7xl hover:text-SecondPurple hover:scale-110" />
                    </div>
                </div>
            </div>
        </>
    )
}