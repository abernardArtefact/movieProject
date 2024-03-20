// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Movies from "./pages/Movies.tsx";
// import Search from "./pages/Search.tsx";
// import Header from "./design-system/Common/Header/Header.tsx";

import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Layout from "./layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Link to="/">
//           <HomePage></HomePage>
//         </Link>
//       </div>
//     ),
//   },
//   {
//     path: "/Movies",
//     element: (
//       <div>
//         <Link to="/Movies">
//           <Movies></Movies>
//         </Link>
//       </div>
//     ),
//   },
//   {
//     path: "/Search",
//     element: (
//       <div>
//         <Link to="/Search">
//           <Search></Search>
//         </Link>
//       </div>
//     ),
//   },
// ]);

// function App() {
//   <RouterProvider router={router}>
//     <Header label={""} ternaryHeader={false} onClick={undefined}></Header>
//   </RouterProvider>;
// }

const App: React.FC = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/Movies", element: <Movies /> },
        { path: "/Search", element: <Search /> },
      ],
    },
  ]);

  return routing;
};

export default App;
