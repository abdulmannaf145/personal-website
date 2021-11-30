import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/details">
            <Route path=":userId" element={<ProjectDetails />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
