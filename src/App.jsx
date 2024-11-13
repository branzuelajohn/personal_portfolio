import './App.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Profile from './sections/Profile';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Projects from './sections/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
