// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Movie from "./pages/Movie.tsx";
// import Search from "./pages/Search.tsx";
// import Header from "./design-system/Common/Header/Header.tsx";
// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import Chart from "chart.js/auto";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Header label={""} ternaryHeader={false} onClick={undefined}></Header>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Movie" element={<Movie />} />
//         <Route path="/Search" element={<Search />} />
//       </Routes>
//     </Router>

//     <App />
//   </React.StrictMode>
// );

// import "./index.css";
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter,
//   Link,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Movie from "./pages/Movie";
// import Search from "./pages/Search";
// import App from "./App";

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
//     path: "/Movie",
//     element: (
//       <div>
//         <Link to="/Movie">
//           <Movie></Movie>
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

//@ts-ignore
// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const container = document.getElementById("root");

ReactDOM.render(element, container);
