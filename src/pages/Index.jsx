import { Box, Flex, Input, Button, Text, VStack, HStack, Tag, IconButton } from "@chakra-ui/react";
import { FaSearch, FaEnvelope, FaFilter } from "react-icons/fa";

const developers = [
  { name: "Alice Johnson", location: "New York, USA", technologies: ["React", "Node"] },
  { name: "Bob Smith", location: "Berlin, Germany", technologies: ["Go", ".NET"] },
  { name: "Carlos Ruiz", location: "Madrid, Spain", technologies: ["JavaScript", "React"] },
  { name: "Diana Reed", location: "Paris, France", technologies: [".NET", "Node"] }
];

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Flex justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">Particles Marketplace</Text>
          <HStack>
            <Input placeholder="Search developers" size="md" />
            <IconButton icon={<FaSearch />} />
            <IconButton icon={<FaFilter />} />
          </HStack>
        </Flex>
        <VStack spacing={4}>
          {developers.map(dev => (
            <Flex key={dev.name} p={4} boxShadow="md" borderRadius="md" justifyContent="space-between" alignItems="center">
              <VStack align="start">
                <Text fontWeight="bold">{dev.name}</Text>
                <Text>{dev.location}</Text>
                <HStack spacing={2}>
                  {dev.technologies.map(tech => <Tag key={tech}>{tech}</Tag>)}
                </HStack>
              </VStack>
              <Button leftIcon={<FaEnvelope />} colorScheme="blue">Contact</Button>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;