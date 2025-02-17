import './App.css';
import { ThemeProvider } from './context/ThemeContex';
import { useTheme } from './context/ThemeContex';
const Content = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>Dark Mode Toggle</h1>
      <p>This is a paragraph describing dark mode.</p>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Content />
  </ThemeProvider>
);

export default App;