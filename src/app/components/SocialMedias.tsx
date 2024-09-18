import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
    iconProps : IconProp
    linkProps : string
}

export default function SocialMedias({ iconProps, linkProps } : IconProps ) {
    return (
        <a target='blank_' href={linkProps}>
            <div>
                <FontAwesomeIcon className="icon transition duration-300 ease-in-out hover:text-SecondPurple hover:scale-110" icon={iconProps} />
            </div>
        </a>
    ) 
}