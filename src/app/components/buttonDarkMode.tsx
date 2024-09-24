
import { useDarkMode } from './context/DarkModeContext';

export default function ButtonDarkMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div onClick={toggleDarkMode} className={`top-0 left-0 w-16 pl-[2px] h-8 flex items-center bg-white rounded-full shadow-md transform cursor-pointer transition-transform duration-300`}>
            <div className={`bg-PrimaryPurple cursor-pointer h-7 w-7 transition duration-300 rounded-full ${isDarkMode ? 'translate-x-8' : ''}`} />
        </div>
    );
}
