import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import RedoAnimText from './RedoAnimText';
import CursorBlinker from './CursorBlinker';
import { Heading, Stack, Flex } from '@chakra-ui/react';

export default function AnimText({ delay }) {
  const [done, setDone] = useState(false);
  const baseText = "Hello I'm";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span style={{ display: 'block', height: '100px' }} className="">
      <Stack spacing={1}>
        <Heading as="h1" size="2xl" className="text-gradient">
          <motion.span>{displayText}</motion.span>
        </Heading>

        {done && (
          <Flex>
            <RedoAnimText delay={delay + 1} />
            <CursorBlinker />
          </Flex>
        )}
      </Stack>
    </span>
  );
}
