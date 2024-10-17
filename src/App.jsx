import './App.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { Stack } from '@chakra-ui/react';

function App() {
  return (
    <div>
      <Stack>
        <Navbar />
        <Hero />
      </Stack>
    </div>
  );
}

export default App;
