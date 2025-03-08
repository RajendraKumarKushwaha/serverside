import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
