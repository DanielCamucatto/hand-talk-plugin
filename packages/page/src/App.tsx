import { Navbar } from './components/Navbar/Navbar';
import { useTheme } from './contexts/ThemeContext';

export const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <Navbar />
    </div>
  );
}
