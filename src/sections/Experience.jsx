import { Container, Stack, Box, HStack, Text, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import starbucks from '../assets/starbucks.png';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

const experiences = [
  {
    title: 'Mobile Software Developer Intern',
    company_name: 'Thales, Singapore',
    icon: starbucks,
    iconBg: '#383E56',
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
    iconBg: '#E6DEDD',
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
    iconBg: '#383E56',
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
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#213547',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #242424 ' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {/* <img
            src={experience.icon}
            alt={experience.company_name}
            style={{ width: '60%', height: '60%', objectFit: 'contain' }}
          /> */}
        </div>
      }
    >
      <div>
        <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          {experience.title}
        </h3>
        <p
          style={{
            margin: 0,
            color: '#b0b0b0',
            fontSize: '16px',
            fontWeight: '600',
          }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul
        style={{ marginTop: '5px', listStyleType: 'disc', marginLeft: '20px' }}
      >
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
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconBg: PropTypes.string.isRequired,
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
