// components/CompanyOverview.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const CompanyOverview = () => {
  return (
    <Box
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      shadow="md"
      mb={6}
      bg="white"
    >
      <Heading size="lg" mb={3} color="teal.600">
        Company Overview: GEA Digital
      </Heading>
      <Text mb={2} color="gray.600">
        {" "}
        {/* Changed to gray */}
        GEA Digital is a global leader in digital transformation, specializing
        in innovative solutions that empower businesses to leverage technology
        for enhanced operational efficiency and decision-making.
      </Text>
      <Text mb={2} color="gray.600">
        {" "}
        {/* Changed to gray */}
        Their expertise spans various industries, providing tailored solutions
        in areas such as data analytics, automation, and artificial
        intelligence.
      </Text>
      <Text color="gray.600">
        {" "}
        {/* Changed to gray */}
        With a commitment to driving sustainable growth through digital
        innovation, GEA Digital helps organizations navigate the complexities of
        today's digital landscape.
      </Text>
    </Box>
  );
};

export default CompanyOverview;
