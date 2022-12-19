import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@hooks';

export function ThemeToggler() {
  const { theme, setDarkTheme, setLightTheme } = useTheme() || {};
  const handleToggleTheme = () => {
    if (theme === 'dark' && setLightTheme) {
      setLightTheme();
    } else if (theme === 'light' && setDarkTheme) {
      setDarkTheme();
    }
  };
  return (
    <button
      type="button"
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-primary-200 dark:bg-primary-700"
      onClick={handleToggleTheme}
    >
      {theme === 'dark' ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}

export default ThemeToggler;
