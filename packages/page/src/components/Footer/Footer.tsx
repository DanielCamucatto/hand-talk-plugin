import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <nav className={`flex justify-center items-center w-full h-15 p-5 bottom-0 mt-5 z-50 ${isDarkMode ? 'bg-gray-500 text-white' : 'bg-[#323232] text-white'}`}>
     <p className='font-bold'>Desafio para Hand Talk</p>
    </nav>
  );
};

export default Footer;