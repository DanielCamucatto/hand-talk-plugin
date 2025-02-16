import { useTheme } from '../../contexts/ThemeContext';

interface ButtonProps {
    name: string;
    bgColor?: string;
    textColor?: string;
  }
  
  const Button = ({ name }: ButtonProps) => {
    const { isDarkMode } = useTheme();

    return (
      <button className={`${isDarkMode ? 'bg-[#ccc]' : 'bg-[var(--dark-color)]'} hover:opacity-80 ${isDarkMode ? 'text-[--dark-color]' : 'text-white'} font-bold py-2 px-4 rounded transition-colors cursor-pointer`}>
        {name}
      </button>
    );
  };
  
  export default Button;
  