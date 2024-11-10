import './App.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import { Stack, Container, Box } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </>
  );
}

export default App;
