import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@hooks';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Works', link: '#' },
  { label: 'Blogs', link: '#' },
  { label: 'Stuffs', link: '#' },
];

export function Navbar() {
  const { theme, setDarkTheme, setLightTheme } = useTheme() || {};
  const handleToggleTheme = () => {
    if (theme === 'dark' && setLightTheme) {
      setLightTheme();
    } else if (theme === 'light' && setDarkTheme) {
      setDarkTheme();
    }
  };
  return (
    <nav className="text-dark flex w-full justify-between dark:text-white">
      <div className="flex gap-4">
        {menuItems.map((menu, idx: number) => (
          <div className="flex items-center gap-4" key={menu.label}>
            {idx ? (
              <span className="dark:bg-dark hover:text-underline h-1 w-1 rounded bg-primary-900 dark:bg-white" />
            ) : null}
            <a href={menu.link} className=" text-sm hover:text-emerald-500">
              {menu.label}
            </a>
          </div>
        ))}
      </div>
      <div>
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
      </div>
    </nav>
  );
}

export default Navbar;
