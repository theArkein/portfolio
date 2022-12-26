import { ThemeToggler } from './ThemeToggler';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Resume', link: '/resume' },
  { label: 'Blogs', link: '/blogs' },
  { label: 'Stuffs', link: '/stuffs' },
];

export function Navbar() {
  return (
    <nav className="text-dark flex w-full justify-between dark:text-white">
      <div className="flex gap-4">
        {menuItems.map((menu, idx: number) => (
          <div className="flex items-center gap-4" key={menu.label}>
            {idx ? (
              <span className="dark:bg-dark hover:text-underline h-1 w-1 rounded bg-primary-900 dark:bg-white" />
            ) : null}
            <a href={menu.link} className=" hover:text-emerald-500">
              {menu.label}
            </a>
          </div>
        ))}
      </div>
      <div>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default Navbar;
