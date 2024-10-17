import {
  Box,
  Flex,
  HStack,
  Link,
  Icon,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillMoon,
  AiFillSun,
} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { toggleColorMode } = useColorMode();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toggleColorMode();
  };
  const theme = useTheme();
  const textColor = theme.colors.text[darkMode ? 'dark' : 'light'];
  const borderColor = theme.colors.border[darkMode ? 'dark' : 'light'];

  return (
    <Box color="white" position="fixed" width="100%" zIndex={1000}>
      <Flex px={4} py={2} borderBottom={`1px solid ${borderColor}`}>
        <Flex
          maxW="1200px"
          width="100%"
          mx="auto"
          justify="space-between"
          align="center"
        >
          <HStack spacing={4} textColor={textColor}>
            <Link href="http://www.linkedin.com/in/johnalecmb" isExternal>
              <Icon as={AiFillLinkedin} boxSize={8} />
            </Link>
            <Link href="mailto:branzuelajohn@gmail.com" isExternal>
              <Icon as={AiOutlineMail} boxSize={8} />
            </Link>
            <Link>
              {darkMode ? (
                <Icon as={AiFillMoon} boxSize={8} onClick={toggleDarkMode} />
              ) : (
                <Icon as={AiFillSun} boxSize={8} onClick={toggleDarkMode} />
              )}
            </Link>
          </HStack>
          <HStack spacing={8} align="center" textColor={textColor}>
            <Link
              href="#about"
              _hover={{ textDecoration: 'none', color: 'teal.300' }}
              fontSize="lg"
            >
              About
            </Link>
            <Link
              href="#experience"
              _hover={{ textDecoration: 'none', color: 'teal.300' }}
              fontSize="lg"
            >
              Experience
            </Link>
            <Link
              href="#education"
              _hover={{ textDecoration: 'none', color: 'teal.300' }}
              fontSize="lg"
            >
              Education
            </Link>
            <Link
              href="#projects"
              _hover={{ textDecoration: 'none', color: 'teal.300' }}
              fontSize="lg"
            >
              Projects
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
