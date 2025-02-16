import AvatarIcon from '../../assets/icons/avatar.svg'
import Button from '../Button/Button';
import { useTheme } from '../../contexts/ThemeContext';

interface AvatarProps {
  name: string;
}

const Avatar = ({ name }: AvatarProps) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-16">
      <img 
        src={AvatarIcon} 
        alt="Avatar" 
        className={`w-[180px] h-[181px] ${isDarkMode ? 'invert' : ''}`} 
      />
      <p className={`text-center text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-[--dark-color]'}`}>{name}</p>
      <Button name="Entre em contato" />
    </div>
  )
}

export default Avatar
