import { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import CursorBlinker from '../utils/CursorBlinker';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import AnimText from '../utils/AnimText';

const Hero = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('black', 'white');
  const textIndex = useMotionValue(0);
  const texts = [
    'John Alec',
    'A Frontend Developer',
    'A Backend Developer',
    'A Mobile Developer',
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      bg={bgColor}
      minH="100vh"
      display="flex"
      textAlign="left"
      paddingY={20}
      paddingLeft={10}
    >
      <Stack paddingTop={5} spacing={3}>
        <AnimText delay={0} />
        <Text fontSize="xl">
          Computer Science Graduate from National University Of Singapore
        </Text>
        <a href="/public/resume_john_alec.pdf" download>
          <Button
            width="40%"
            borderRadius="full"
            backgroundColor="#c084fc"
            _hover={{ background: '#60a5fa' }}
          >
            Download Resume
          </Button>
        </a>
      </Stack>
    </Box>
  );
};

export default Hero;
