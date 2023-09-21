import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
// 247,193,206

function App() {
  return (
    <div className="h-full w-full bg-[rgb(247,247,248)] overflow-x-hidden">
      <Navbar/>
      <Hero />
      <About />
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
