import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import NerdNews from "./components/Pages/NerdNews";
import Videogames from "./components/Pages/Videogames";
import Books from "./components/Pages/Books";
import FilmTv from "./components/Pages/FilmTv";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film&tv" element={<FilmTv />} />
          <Route path="/videogames" element={<Videogames />} />
          <Route path="/books" element={<Books />} />
          <Route path="/nerdnews" element={<NerdNews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
