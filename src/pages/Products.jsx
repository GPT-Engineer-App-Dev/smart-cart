import { Box, SimpleGrid, Image, Text, Button, VStack, Checkbox, CheckboxGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const products = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: 199, category: "Wearables", image: "/images/smartwatch.jpg" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const query = useQuery();
    const search = query.get("search")?.toLowerCase() || "";
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [useLocation().search, selectedCategories, priceRange]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <Box p={4}>
      <Box mb={4}>
        <Text fontSize="xl" fontWeight="bold">Filter by Category</Text>
        <CheckboxGroup onChange={handleCategoryChange}>
          <Stack spacing={2} direction="row">
            <Checkbox value="Electronics">Electronics</Checkbox>
            <Checkbox value="Wearables">Wearables</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box mb={4}>
        <Text fontSize="xl" fontWeight="bold">Filter by Price</Text>
        <RangeSlider defaultValue={[0, 1000]} min={0} max={1000} step={50} onChangeEnd={handlePriceChange}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
            <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
            <Text>${product.price}</Text>
            <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;