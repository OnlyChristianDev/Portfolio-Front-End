import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SkillIcon {
    iconProp : IconProp
}

export default function SkillsIcon( { iconProp } : SkillIcon ){
    return(
        <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl h-44 w-44'>
            <FontAwesomeIcon className='text-9xl text-[#f8f8ff]' icon={iconProp} />
        </div>
    )
}