import './App.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Profile from './sections/Profile';
import Experience from './sections/Experience';
import { Stack, Container, Box } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Experience />
    </>
  );
}

export default App;
