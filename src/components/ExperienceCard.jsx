import {
  useColorModeValue,
  Icon,
  useBreakpointValue,
  Flex,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
  const iconColor = useColorModeValue('white', 'white');
  const iconBgColor = useColorModeValue('#33adff', '#383E56');
  const dateColor = useColorModeValue('black', 'white');
  const cardBgColor = useColorModeValue('#60a5fa', '#213547');
  const cardTitleColor = useColorModeValue('#213547', '#33adff');
  const cardTextColor = useColorModeValue('black', 'white');
  const arrowColor = useColorModeValue('#2196F3', '#242424');
  const companyNameColor = useColorModeValue('black', '#33adff');

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: cardBgColor,
        color: cardTextColor,
      }}
      contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
      date={experience.date}
      dateClassName={'vertical-timeline-element-date'}
      iconStyle={{ background: iconBgColor, color: iconColor }}
      icon={
        <Icon
          fontSize="25px"
          style={{
            width: '50%',
            height: '50%',
            objectFit: 'contain',
            transform: useBreakpointValue({
              base: 'translate(2px, 2px)',
              md: 'translate(-3px, -2px)',
            }),
          }}
        >
          <MdWork />
        </Icon>
      }
    >
      <style>
        {`
        .vertical-timeline-element-date {
          color: ${dateColor};
          margin-left: -10px; 
          font-weight: bold;
        }
      `}
      </style>

      <Flex direction="column" rowGap={4}>
        <Flex direction="column" rowGap={2}>
          <Heading
            size={{ base: 'xl', md: '3xl' }}
            style={{ color: cardTextColor }}
          >
            {experience.title}
          </Heading>
          <Heading
            mt={2}
            size={{ base: 'lg', md: '2xl' }}
            style={{ color: cardTitleColor }}
            display="inline-flex"
            columnGap={1}
          >
            <Text as="span">
              {' '}
              {experience.company_name} | {experience.job_status}
            </Text>
          </Heading>
        </Flex>
        <Box mt={2}>
          {experience.points.map((point, index) => (
            <Flex key={index} align="flex-start" mb={4}>
              {/* Icon */}
              <Icon as={FaCheckCircle} boxSize={5} mt={1} mr={4} />

              {/* Text */}
              <Box flex="1">
                <Text
                  as="span"
                  display="inline-block"
                  whiteSpace="normal"
                  fontSize="md"
                  lineHeight="1.6"
                  align={'left'}
                >
                  {point}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </VerticalTimelineElement>
  );
};
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconBg: PropTypes.string,
    job_status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default ExperienceCard;
