import { motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';

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
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      style={{
        display: 'inline-block',
        height: '55px',
        width: '8px',
        backgroundColor: cursorColor,
        marginLeft: '5px',
        transform: 'translateY(10px)',
      }}
    />
  );
}
