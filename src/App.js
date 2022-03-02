import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import DashBoard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/contact";
import Table from "./components/table";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  </>
);

export default App;
