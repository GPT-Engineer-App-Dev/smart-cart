import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Electronics Store</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        <Button as={Link} to="/products" colorScheme="teal" size="lg">Shop Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;