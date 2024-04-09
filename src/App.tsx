import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Layout from "./layout";
import FavorisPage from "./pages/FavorisPage";

const App: React.FC = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movie", element: <Movie /> },
        { path: "/search", element: <Search /> },
        { path: "/movie/:id", element: <Movie /> },
        { path: "/favorisPage", element: <FavorisPage /> },
      ],
    },
  ]);

  return routing;
};

export default App;
