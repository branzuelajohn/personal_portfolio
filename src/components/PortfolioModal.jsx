import * as React from 'react';
import { Image } from '@chakra-ui/react';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function PortfolioModal({
  title,
  imageThumbnail,
  description,
  repositoryURL,
  techStack,
  isOpen,
  onClose,
}) {
  const borderColor = useColorModeValue('black', 'white');
  const hoverBgColor = useColorModeValue('black', 'white');
  const hoverTextColor = useColorModeValue('white', 'black');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'sm', md: 'md', lg: 'lg', xl: '2xl' }}
      isCentered
    >
      <ModalOverlay
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(1.25rem)"
      />
      <ModalContent backgroundColor="background">
        <ModalHeader>
          <Heading size="md" fontSize="24px">
            {title}
          </Heading>
        </ModalHeader>

        <ModalCloseButton color="red" />

        <ModalBody display="flex" flexDirection="column" rowGap={5}>
          <Box
            borderRadius="md"
            overflow="hidden"
            borderWidth="1.5px"
            borderColor="secondary"
            width="100%"
            height="100%"
          >
            <Image
              src={imageThumbnail}
              alt="Project Preview Thumbail"
              height={350}
              width={550}
              fallback={<Skeleton height="20rem" />}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </Box>
          <Heading size="md"> Technologies Used</Heading>
          <Flex wrap="wrap" alignItems="center" gap={3}>
            {techStack.map(({ tech, logo }, index) => (
              <Badge
                key={`${tech} - ${index}`}
                display="flex"
                alignItems="center"
                columnGap={2}
                paddingY={1}
              >
                <Image src={logo} alt="Tech Stack Logo" height={4} width={4} />

                <Text>{tech}</Text>
              </Badge>
            ))}
          </Flex>

          <Heading size="md">Description</Heading>
          <Text
            fontSize={{ base: '0.9em', md: '1rem' }}
            whiteSpace={'pre-line'}
          >
            {description}
          </Text>
        </ModalBody>

        <ModalFooter justifyContent="flex-start" columnGap={3}>
          {!repositoryURL ? null : (
            <Button
              as="a"
              href={repositoryURL}
              colorScheme="white"
              variant="outline"
              borderWidth="2px"
              target="_blank"
              transition="all 300ms"
              leftIcon={<BsGithub />}
              borderColor={borderColor}
              _hover={{
                backgroundColor: hoverBgColor,
                color: hoverTextColor,
              }}
            >
              Project Repository
            </Button>
          )}
          <Button
            onClick={onClose}
            variant="solid"
            backgroundColor="red.500"
            color="white"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

PortfolioModal.propTypes = {
  title: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repositoryURL: PropTypes.string,
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      tech: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
