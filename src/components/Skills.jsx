import {
  Stack,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react';

const Skills = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Frameworks</Tab>
        <Tab>Languages</Tab>
      </TabList>

      <TabPanels>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Skills;
