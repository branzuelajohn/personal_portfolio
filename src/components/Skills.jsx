import React from 'react';
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Icon,
  Text,
  Tooltip,
  Flex,
} from '@chakra-ui/react';

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
} from 'react-icons/si';
import {
  FaPython,
  FaJava,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

const SkillIcon = ({ icon, label }) => (
  <Box className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
    <Icon as={icon} className="w-12 h-12 mb-2" />
    <Text className="text-sm font-medium">{label}</Text>
  </Box>
);

const Skills = () => {
  const frameworks = [
    { icon: SiReact, label: 'React' },
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: SiTailwindcss, label: 'Tailwind CSS' },
  ];

  const languages = [
    { icon: SiPython, label: 'Python' },
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiHtml5, label: 'HTML5' },
    { icon: SiCss3, label: 'CSS3' },
    { icon: SiMysql, label: 'MySQL' },
  ];

  return (
    <Tabs variant="line" colorScheme="blue" width="100%">
      <TabList>
        <Tab>Frameworks</Tab>
        <Tab>Languages</Tab>
      </TabList>

      <TabPanels>
        {/* Frameworks Tab */}
        <TabPanel>
          <Flex alignItems="center" columnGap={4} marginTop={2} flexWrap="wrap">
            {frameworks.map((framework, index) => (
              <Tooltip
                key={index}
                label={framework.label}
                aria-label={framework.label}
              >
                <Icon as={framework.icon} boxSize={8} />
              </Tooltip>
            ))}
          </Flex>
        </TabPanel>
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
        {/* Languages Tab */}
        <TabPanel>
          <Box display="flex" gap={4} justifyContent="center" flexWrap="wrap">
            {languages.map((language, index) => (
              <Icon key={index} as={language.icon} boxSize={8} />
            ))}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Skills;
