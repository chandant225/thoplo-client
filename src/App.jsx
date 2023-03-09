import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ActivateUser from "./pages/activateUser";
import HomePage from "./pages/homepage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/activate-user/:token" element={<ActivateUser/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
