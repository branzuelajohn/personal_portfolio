import {
  Box,
  Flex,
  HStack,
  Link,
  Icon,
  useColorMode,
  Button,
  useColorModeValue,
  useMediaQuery,
  useDisclosure,
  useTheme,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Center,
} from '@chakra-ui/react';
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillMoon,
  AiFillSun,
} from 'react-icons/ai';

import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const scrollToHero = () => {
    const heroSection = document.querySelector('#hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProfile = () => {
    const profileSection = document.querySelector('#profile');
    profileSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    const experienceSection = document.querySelector('#experience');
    experienceSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  const theme = useTheme();
  const textColor = theme.colors.text[darkMode ? 'dark' : 'light'];
  const borderColor = useColorMode('black', 'white');

  return (
    <>
      <Flex
        px={4}
        h={16}
        boxShadow={scroll ? 'base' : 'none'}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={'center'}
        justifyContent={'space-between'}
        w="100%"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Stack direction={'row'}>
          <Button variant="ghost" onClick={scrollToHero}>
            <span>{'<JOHN ALEC />'}</span>
          </Button>
          {isLargerThanMD ? (
            <>
              <Link href="http://www.linkedin.com/in/johnalecmb" isExternal>
                <Icon as={AiFillLinkedin} boxSize={8} mt={1} />
              </Link>
              <Link href="mailto:branzuelajohn@gmail.com" isExternal>
                <Icon as={AiOutlineMail} boxSize={8} mt={1} />
              </Link>
            </>
          ) : (
            <></>
          )}
        </Stack>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={scrollToProfile}>
                  About
                </Button>
                <Button variant="ghost" onClick={scrollToExperience}>
                  Experience
                </Button>
                <Button variant="ghost" onClick={scrollToProjects}>
                  Projects
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  Contact
                </Button>
              </>
            ) : (
              <></>
            )}

            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? (
                <Icon as={AiFillMoon} boxSize={8} />
              ) : (
                <Icon as={AiFillSun} boxSize={8} onClick={toggleColorMode} />
              )}{' '}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToProfile}>
                        About
                      </Button>
                      <Button variant="ghost" onClick={scrollToExperience}>
                        Experience
                      </Button>
                      <Button variant="ghost" onClick={scrollToProjects}>
                        Projects
                      </Button>
                      <Button variant="ghost" onClick={scrollToProfile}>
                        Contact
                      </Button>
                      {/* <Link
                        href="http://www.linkedin.com/in/johnalecmb"
                        isExternal
                      >
                        <Icon as={AiFillLinkedin} boxSize={6} mt={4} />
                      </Link>
                      <Link href="mailto:branzuelajohn@gmail.com" isExternal>
                        <Icon as={AiOutlineMail} boxSize={6} mt={4} />
                      </Link> */}
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
