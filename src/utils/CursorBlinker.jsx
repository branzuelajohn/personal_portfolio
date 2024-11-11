import { motion } from 'framer-motion';
import { useColorModeValue, useBreakpointValue } from '@chakra-ui/react';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function CursorBlinker() {
  const cursorColor = useColorModeValue('black', 'white'); // Light mode: black, Dark mode: white
  const cursorHeight = useBreakpointValue({ base: '25px', md: '55px' });
  const cursorWidth = useBreakpointValue({ base: '5px', md: '8px' });
  const cursorTransform = useBreakpointValue({
    base: 'translateY(4px)',
    md: 'translateY(13px)',
  });
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      style={{
        display: 'inline-block',
        height: cursorHeight,
        width: cursorWidth,
        backgroundColor: cursorColor,
        marginLeft: '5px',
        transform: cursorTransform,
      }}
    />
  );
}
