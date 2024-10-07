import { IconType } from "react-icons";

interface SkillsIconProps {
  Icon: IconType;
}

export default function SkillsIcon({ Icon }: SkillsIconProps) {
  return (
      <div className='bg-PrimaryPurple shadow-2xl flex items-center justify-center rounded-tl-2xl rounded-br-2xl w-44 max-sm:bg-red-900 max-sm:w-24 max-md:w-32 max-lg:w-44 xl:w-48'>
        <Icon size={150} color="white" className="w-full h-full p-3" />
      </div>
  );
}