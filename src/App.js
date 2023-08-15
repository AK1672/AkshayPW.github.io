import './App.css';
import About from './component/About';
import Journey from './component/Journey';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="container">
    <NavBar/>
    <Router>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/Journey" element={<Journey />}></Route>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
