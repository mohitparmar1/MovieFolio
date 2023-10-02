import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<h1>this will take params and load route</h1>} />
          <Route path="movie/:type" element={<h1>this is list page</h1>} />
          <Route path="/*" element={<h1>Error Found!</h1>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;

