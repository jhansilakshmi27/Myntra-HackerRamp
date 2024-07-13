import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Intro from "./pages/intro";
import MovieIntro from "./pages/movie-intro";
import DecorIntro from "./pages/decor-intro";
import Decor from "./pages/decor";
import Decor1 from "./pages/decor1";
import Decor2 from "./pages/decor2";
import ARView from "./pages/a-r-view";
import Movie from "./pages/movie";
import Movie1 from "./pages/movie1";
import Movie2 from "./pages/movie2";
import Movie3 from "./pages/movie3";
import Char from "./pages/char";
import Char1 from "./pages/char1";
import Char2 from "./pages/char2";
import Char3 from "./pages/char3";
import Char4 from "./pages/char4";
import Char5 from "./pages/char5";
import Char6 from "./pages/char6";
import Char7 from "./pages/char7";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/movie-intro":
        title = "";
        metaDescription = "";
        break;
      case "/decor-intro":
        title = "";
        metaDescription = "";
        break;
      case "/decor-1":
        title = "";
        metaDescription = "";
        break;
      case "/decor-2":
        title = "";
        metaDescription = "";
        break;
      case "/decor-3":
        title = "";
        metaDescription = "";
        break;
      case "/ar-view":
        title = "";
        metaDescription = "";
        break;
      case "/movie-1":
        title = "";
        metaDescription = "";
        break;
      case "/movie-2":
        title = "";
        metaDescription = "";
        break;
      case "/movie-3":
        title = "";
        metaDescription = "";
        break;
      case "/movie-4":
        title = "";
        metaDescription = "";
        break;
      case "/char-1":
        title = "";
        metaDescription = "";
        break;
      case "/char-2":
        title = "";
        metaDescription = "";
        break;
      case "/char-3":
        title = "";
        metaDescription = "";
        break;
      case "/char-4":
        title = "";
        metaDescription = "";
        break;
      case "/char-5":
        title = "";
        metaDescription = "";
        break;
      case "/char-6":
        title = "";
        metaDescription = "";
        break;
      case "/char-7":
        title = "";
        metaDescription = "";
        break;
      case "/char-8":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/movie-intro" element={<MovieIntro />} />
      <Route path="/decor-intro" element={<DecorIntro />} />
      <Route path="/decor-1" element={<Decor />} />
      <Route path="/decor-2" element={<Decor1 />} />
      <Route path="/decor-3" element={<Decor2 />} />
      <Route path="/ar-view" element={<ARView />} />
      <Route path="/movie-1" element={<Movie />} />
      <Route path="/movie-2" element={<Movie1 />} />
      <Route path="/movie-3" element={<Movie2 />} />
      <Route path="/movie-4" element={<Movie3 />} />
      <Route path="/char-1" element={<Char />} />
      <Route path="/char-2" element={<Char1 />} />
      <Route path="/char-3" element={<Char2 />} />
      <Route path="/char-4" element={<Char3 />} />
      <Route path="/char-5" element={<Char4 />} />
      <Route path="/char-6" element={<Char5 />} />
      <Route path="/char-7" element={<Char6 />} />
      <Route path="/char-8" element={<Char7 />} />
    </Routes>
  );
}
export default App;
