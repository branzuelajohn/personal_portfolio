import {
  Container,
  Stack,
  Box,
  HStack,
  Text,
  Divider,
  Flex,
  Heading,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import starbucks from '../assets/starbucks.png';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';
import { FaSuitcase } from 'react-icons/fa6';

const experiences = [
  {
    title: 'Mobile Software Developer Intern',
    company_name: 'Thales, Singapore',
    icon: starbucks,
    job_status: 'Internship',
    date: ' May 2021 - Aug 2021',
    points: [
      'Participated in the design, implementation, and validation of mobile iOS applications within the R&D drone project team, adhering to established processes and delivery standards using Swift',
      'Implemented RESTful API and Websocket integration for seamless data exchange',
      'Utilized RxSwift to dynamically update and track real-time drone data and nearby drones',
      'Conducted field testing to ensure real-time functionality of drone devices with the software',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Lalia, Singapore ',
    icon: starbucks,
    job_status: 'Internship',
    date: 'Dec 2021 - Jun 2022',
    points: [
      'Implemented search and filter functionality, pagination and optimized landing and profile pages using ReactJS and NextJS, reducing page load times.',
      'Developed a comprehensive Image CMS using AWS Amplify and AWS S3, optimizing image load times and storage efficiency',
      'Integrated Google Login functionality into the web application, streamlining user authentication and enhancing onboarding experience.',
      'Developed unit tests with Jest and automated end-to-end testing using Playwright',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Avaloq, Singapore',
    icon: starbucks,
    job_status: 'Full-time',
    date: 'Feb 2024 - Aug 2024',
    points: [
      'Analyzed and resolved critical defects in Web and Mobile Banking solutions for APAC clients, utilizing Angular and Avaloq’s scripting language, ensuring uninterrupted banking operations',
      'L3 support for Web and Mobile Banking for APAC clients, having constant collaboration with banks for new and ongoing feature enhancements.',
      'Managed the continual maintenance and optimization of web and mobile banking services for three major private banks across the Asia-Pacific region, ensuring uninterrupted client satisfaction and operational excellence.',
      'Migrated existing web pages from JSP to Angular RestUI',
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  const contentStyle = useBreakpointValue({
    base: {
      background: '#213547',
      color: '#fff',
    },
    md: {
      background: '#213547',
      color: '#fff',
      width: '60%',
      marginLeft: '-15%',
      marginRight: '-15%',
    },
  });
  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={{ borderRight: '7px solid  #242424 ' }}
      date={experience.date}
      iconStyle={{ background: '#383E56' }}
      icon={
        <Icon
          as={FaSuitcase}
          boxSize={8}
          style={{
            width: '50%',
            height: '50%',
            objectFit: 'contain',
            transform: useBreakpointValue({
              base: 'translate(2px, 2px)',
              md: 'translate(-3px, -2px)',
            }),
          }}
        />
      }
    >
      <Flex direction="column" rowGap={4}>
        <Flex direction="column" rowGap={2}>
          <Heading>{experience.title}</Heading>
          <Text
            fontWeight="semibold"
            color="primary"
            display="inline-flex"
            columnGap={1}
          >
            {experience.company_name}{' '}
            <Text as="span" color="text" fontWeight="medium">
              {' '}
              | {experience.job_status}
            </Text>
          </Text>
        </Flex>

        {/* <Flex alignItems="center" columnGap={4} marginTop={2}>
            {techStack.map((imageUrl, index) => (
              <Image
                key={`${imageUrl} - ${index}`}
                src={imageUrl}
                alt="Tech Stack Icon"
                width={28}
                height={28}
              />
            ))}
          </Flex> */}

        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            style={{
              color: '#b0b0b0',
              fontSize: '14px',
              paddingLeft: '5px',
              letterSpacing: '0.5px',
            }}
          >
            <Text textAlign="justify">{point}</Text>
          </li>
        ))}
      </Flex>
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconBg: PropTypes.string.isRequired,
    job_status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Experience = () => {
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
            <Text color="whiteAlpha.400" fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>Experience</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>

        <div>
          <motion.div>
            <p style={{ textAlign: 'center' }}>What I have done so far</p>
            <h2 style={{ textAlign: 'center' }}>Work Experience.</h2>
          </motion.div>

          <div style={{ marginTop: '20px' }}>
            <VerticalTimeline>
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
