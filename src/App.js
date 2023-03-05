import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
