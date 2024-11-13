import {
  Container,
  Stack,
  Box,
  HStack,
  Text,
  Divider,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../constants/data';

const Experience = () => {
  const dividerTextColor = useColorModeValue('gray.600', 'whiteAlpha.400');
  const dividerColor = useColorModeValue('gray.800', 'whiteAlpha.400');
  const timelineLineColor = useColorModeValue('black', 'white');

  return (
    <Container maxW="7xl" id="experience">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={dividerTextColor} fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>Experience</Text>
          </HStack>
          <Divider orientation="horizontal" borderColor={dividerColor} />
        </Stack>

        <div>
          <motion.div>
            <Heading style={{ textAlign: 'center' }}>Work Experiences</Heading>
          </motion.div>

          <div style={{ marginTop: '20px' }}>
            <VerticalTimeline lineColor={timelineLineColor}>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default Experience;
