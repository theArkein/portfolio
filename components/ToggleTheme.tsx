import { useTheme } from '@hooks';

export function ToggleTheme() {
  const { theme, setDarkTheme, setLightTheme, setSystemTheme } =
    useTheme() || {};

  return (
    <div className="text-white">
      <p>The current theme is: {theme}</p>

      <div>
        <button onClick={setDarkTheme} type="button">
          Dark Mode
        </button>
      </div>
      <div>
        <button onClick={setLightTheme} type="button">
          Light Mode
        </button>
      </div>
      <div>
        <button onClick={setSystemTheme} type="button">
          Same as System
        </button>
      </div>
    </div>
  );
}

export default ToggleTheme;
