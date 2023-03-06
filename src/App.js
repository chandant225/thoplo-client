import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
