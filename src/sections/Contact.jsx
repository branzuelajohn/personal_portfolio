import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const profile = {
  siteName: '',
  headerName: '',
  headerRole: '',
  headerDesc: '',
  about: '',
  contact: '+65 90259104',
  linkedin: 'https://www.linkedin.com/in/johnalecmb',
  github: 'https://github.com/branzuelajohn',
  email: 'branzuelajohn@gmail.com',
  logo: '',
};
export default function Contact() {
  const emailColor = useColorModeValue('gray.600', 'teal.300');
  const linkedin = () => {
    window.open(`${profile.linkedin}`, '_blank', 'noreferrer,noopener');
  };
  const github = () => {
    window.open(`${profile.github}`, '_blank', 'noreferrer,noopener');
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, '_blank', 'noreferrer,noopener');
  };
  return (
    <>
      <Container maxW={'7xl'} id="contact">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text fontWeight={800}>04</Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }}>
              Let's stay in touch!
            </Heading>
            <Text
              fontWeight={600}
              color={emailColor}
              fontSize={{ base: 'md', md: 'lg' }}
              px={4}
            >
              {profile.email}
            </Text>
            <Text color={'gray.600'} fontSize={{ base: 'md', md: 'lg' }} px={4}>
              {profile.contact}
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin
                  onClick={linkedin}
                  size={28}
                  style={{ cursor: 'pointer' }}
                />
                <FaGithub
                  onClick={github}
                  size={28}
                  style={{ cursor: 'pointer' }}
                />
                <FaEnvelope
                  onClick={email}
                  size={28}
                  style={{ cursor: 'pointer' }}
                />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
