import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />

          <Routes>
            <Route index element={<Home />} />
            <Route
              path="movie/:id"
              element={<h1>movie info will be appear here!</h1>}
            />
            <Route path="movie/:type" element={<MovieList />} />
            <Route path="/*" element={<h1>error</h1>} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
