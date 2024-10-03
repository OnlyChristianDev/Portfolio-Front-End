import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SkillIcon {
    iconProp : IconProp
}

export default function SkillsIcon( { iconProp } : SkillIcon ){
    return(
        <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl aspect-square w-44 sm:w-[26vw] sm:max-w-24'>
            <FontAwesomeIcon className='w-32 h-32 text-[#f8f8ff] sm:max-w-20 sm:max-h-20 sm:h-[24vw] sm:w-[24vw]' icon={iconProp}/>
        </div>
    )
}