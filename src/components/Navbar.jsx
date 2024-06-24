import { useState } from "react";
import { Box, Flex, Link, Button, Input } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Electronics Store</Link>
        </Box>
        <Flex alignItems="center">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            color="white"
            variant="outline"
            mr={4}
          />
          <Button as={RouterLink} to={`/products?search=${searchQuery}`} colorScheme="teal" variant="outline" mr={4}>Products</Button>
          <Button as={RouterLink} to="/contact" colorScheme="teal" variant="outline">Contact</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;