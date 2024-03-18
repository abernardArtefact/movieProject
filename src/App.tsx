import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Movies from "./pages/Movies.tsx";
// import Search from "./pages/Search.tsx";
import Header from "./design-system/Common/Header/Header.tsx";

function App() {
  return (
    <>
      <Header label={""} ternaryHeader={false}></Header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<Movies />} />
          <Route path="/search" element={<Search />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
