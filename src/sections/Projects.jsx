import {
  Container,
  Stack,
  Box,
  HStack,
  Text,
  Divider,
  useColorModeValue,
  Grid,
  Heading,
  GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeInTransition, staggeredContainer } from '../utils/motion';
import { portfolioList } from '../constants/data';
import PortfolioCard from '../components/PortfolioCard';
const Projects = () => {
  const dividerTextColor = useColorModeValue('gray.600', 'whiteAlpha.400');
  const dividerColor = useColorModeValue('gray.800', 'whiteAlpha.400');

  return (
    <Container
      as={motion.div}
      maxW="7xl"
      id="projects"
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
    >
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Projects Section Title */}
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={dividerTextColor} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>Projects</Text>
          </HStack>
          <Divider orientation="horizontal" borderColor={dividerColor} />
        </Stack>

        <motion.div>
          <Heading
            fontSize={{ base: 'xl', md: '3xl' }}
            style={{ textAlign: 'center' }}
          >
            Projects I've done so far
          </Heading>
        </motion.div>

        {/* Projects Section Content Container*/}
        <Grid
          as={motion.div}
          variants={fadeInTransition('left', 'tween', 0, 1)}
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={8}
          width={{ base: '90%', lg: '100%' }}
          marginX={{ base: 'auto', lg: 0 }}
          marginTop={12}
        >
          {portfolioList.map(
            (
              {
                title,
                imageThumbnail,
                description,
                livePreviewURL,
                repositoryURL,
                techStack,
              },
              index
            ) => (
              <GridItem
                as={motion.div}
                variants={fadeInTransition('up', 'tween', index * 0.25, 1.1)}
                key={`${title} - ${index}`}
              >
                <PortfolioCard
                  title={title}
                  imageThumbnail={imageThumbnail}
                  description={description}
                  livePreviewURL={livePreviewURL}
                  repositoryURL={repositoryURL}
                  techStack={techStack}
                />
              </GridItem>
            )
          )}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Projects;
