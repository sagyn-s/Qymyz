import { Analytics } from '@vercel/analytics/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Honors from "./Pages/Honors";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/honors" element={<Honors />} />
          </Routes>
        <Footer />
      </Router>
      <Analytics />
    </>
  );
}
export default App;
