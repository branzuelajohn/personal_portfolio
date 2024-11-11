import {
  Heading,
  Stack,
  Text,
  Flex,
  Box,
  HStack,
  Divider,
  Container,
} from '@chakra-ui/react';

import Skills from '../components/Skills';

const About = () => {
  // const textColor = useColorModeValue('black', 'white');
  return (
    <>
      <Container maxW={'7xl'} id="about">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color="whiteAlpha.400" fontWeight={800}>
                {' '}
                01{' '}
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal"></Divider>
          </Stack>

          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={'2rem'}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Text color={'white.600'} fontSize={'lg'} px={4} textAlign={'left'}>
              Hi there! I am a Computer Science graduate from the National
              University of Singapore, where I specialized in Software
              Engineering and Networking. I am passionate about software
              development and I am always eager to learn new technologies. I
              have experience in full-stack development and I am currently
              looking for opportunities in software development. I am
              well-versed in several programming languages and frameworks and am
              open to learn more!
            </Text>

            <Skills />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
