import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
        </>
    );
}

export default App;