import {
  Stack,
  Box,
  Text,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Grid,
  GridItem,
  Container,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import Skills from '../components/Skills';
import { FaCheck } from 'react-icons/fa';
const Profile = () => {
  const dividerTextColor = useColorModeValue('gray.600', 'whiteAlpha.400');
  const dividerColor = useColorModeValue('gray.800', 'whiteAlpha.400');
  const educationalInstitutions = [
    'National University of Singapore',
    'Anglo-Chinese Junior College',
    "St. Joseph's Institution",
    'North View Primary School',
  ];
  return (
    <>
      <Container maxW={'7xl'} id="profile">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={dividerTextColor} fontWeight={800}>
                {' '}
                01{' '}
              </Text>
              <Text fontWeight={800}>Profile</Text>
            </HStack>
            <Divider
              orientation="horizontal"
              borderColor={dividerColor}
            ></Divider>
          </Stack>

          <Grid templateColumns={{ base: '1fr', md: '2fr 3fr' }} gap={8}>
            <GridItem display={'flex'} alignItems={'center'}>
              <Image
                src="/profile_pic.png"
                alt="Profile Picture"
                borderRadius="md"
                boxSize={{ base: '100%', md: '100%' }}
                width={{ base: '80%', md: '100%' }}
                height={{ base: 'auto', md: 'auto' }}
                objectFit="contain"
                mx="auto"
              />
            </GridItem>

            <GridItem>
              <Box>
                <Heading as="h3" size="md" mb={4}>
                  About
                </Heading>
                <Text
                  color={'white.600'}
                  fontSize={{ base: 'lg', md: 'xl' }}
                  textAlign={'left'}
                >
                  Hi there! I am a Computer Science graduate from the National
                  University of Singapore, where I specialized in Software
                  Engineering and Networking. I am passionate about software
                  development and I am always eager to learn new technologies. I
                  have experience in full-stack development and I am currently
                  looking for opportunities in software development. I am
                  well-versed in several programming languages and frameworks
                  and am open to learn more!
                  <br></br> <br></br>In my free time, you can probably find me
                  breaking a sweat on the field playing Touch Rugby or going for
                  a casual jog in the neighbourhood. Staying active is important
                  to me, as I truly believe it helps shape a balanced and
                  productive lifestyle.
                </Text>
              </Box>

              <Box mt={10}>
                <Heading as="h3" size="md" mb={4}>
                  Education
                </Heading>
                {educationalInstitutions.map((institution, index) => (
                  <HStack align="start" key={index}>
                    <Icon as={FaCheck} color="green.500" mt={1} />
                    <Text
                      color={'white.600'}
                      fontSize={{ base: 'lg', md: 'xl' }}
                      textAlign={'left'}
                    >
                      {institution}
                    </Text>
                  </HStack>
                ))}
              </Box>

              <Box mt={10}>
                <Skills />
              </Box>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default Profile;
