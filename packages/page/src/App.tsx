import { useTheme } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar/Navbar';
import Avatar from './components/Avatar/Avatar';


export const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center pt-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <Navbar />
      <Avatar name="John Doe" />
    </div>
  );
}
