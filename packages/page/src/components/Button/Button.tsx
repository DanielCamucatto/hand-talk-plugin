import { useTheme } from '../../contexts/ThemeContext';

interface ButtonProps {
    name: string;
    bgColor?: string;
    textColor?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }
  
  const Button = ({ name, onClick, type='button', disabled = false }: ButtonProps) => {
    const { isDarkMode } = useTheme();

    return (
      <button 
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${isDarkMode ? 'bg-[#ccc]' : 'bg-[var(--dark-color)]'} hover:opacity-80 ${isDarkMode ? 'text-[--dark-color]' : 'text-white'} font-bold py-2 px-4 rounded transition-colors cursor-pointer`}>
        {name}
      </button>
    );
  };
  
  export default Button;
  