import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Layout from "./layout";
import FavorisPage from "./pages/FavorisPage";
import { createContext, useState } from "react";
import Register from "./pages/Register";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/search", element: <Search /> },
        { path: "/movie/:id", element: <Movie /> },
        { path: "/favorisPage", element: <FavorisPage /> },
        // { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div
        id={theme}
        className={`${theme === "light" ? "bg-cyan-200" : "bg-blue-900"} h-screen`}
      >
        {routing}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
