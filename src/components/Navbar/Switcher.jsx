import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Switcher() {
  const [theme, setTheme] = useState(localStorage.theme || 'dark');

  const toggleDarkMode = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const isDarkMode = () => {
    return theme === 'dark';
  };

  useEffect(() => {
    window.document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <DarkModeSwitch
      checked={isDarkMode()}
      onChange={toggleDarkMode}
      moonColor="currentColor"
      sunColor="currentColor"
    />
  );
}

export default Switcher;
