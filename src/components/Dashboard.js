// components/DashboardStep.js
import React from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { useStepContext } from "./StepContext";
import CompanyOverview from "./CompanyOverview";
import RadarChartParent from "./RadarChart";
import { motion } from "framer-motion";
import SummaryOfFindings from "./SummaryOfFindings";
import ImpactScoreExplanation from "./ImpactScoreExplanation";

const DashboardStep = () => {
  const { prevStep, companyUrl, reset } = useStepContext();

  const analysis = `
    Based on the data analysis, it appears that the company could benefit greatly by investing in AI for Content Creation and automation technologies. 
    These areas offer high impact on operational efficiency, especially in automating marketing, design, and customer experience. 
    With the growing market for generative AI, companies could see rapid ROI by integrating these technologies.
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Box bg="surface" p={4} borderBottom="1px solid #303030" mb={6}>
        <Flex alignItems="center">
          {/* Replace with an actual logo if needed */}
          <Image src="/logo.svg" alt="Company Logo" boxSize="60px" mr={3} />
          <Heading as="h1" size="md" mb={0} color="primary.500">
            Dashboard
          </Heading>
          <Spacer />
          {/* Additional controls can be added here on the right */}
        </Flex>
      </Box>
      <Container maxW="container.xl" p={5}>
        <Box bg="surface" p={8} borderRadius="lg" boxShadow="lg">
          <Heading as="h2" size="lg" color="primary.500" mb={6}>
            Company Analysis: GEA Digital
          </Heading>
          <Text color="text.secondary" mb={4}>
            Below is an analysis of how GEA Digital can integrate AI and Spatial
            Computing to improve its business operations. We also identify key
            technology areas and their impact.
          </Text>
          <Box justify="center" align="center" mt={8} height={600}>
            <RadarChartParent />
          </Box>
          <Box mt={8}>
            <Heading size="md" mb={4} color="primary.500">
              Analysis & Recommendations
            </Heading>
            <Text color="text.secondary">{analysis}</Text>
          </Box>

          <Button mt={6} onClick={reset}>
            Go Back
          </Button>
        </Box>
      </Container>
      <Container maxW="container.xl" p={5}>
        <ImpactScoreExplanation />
      </Container>
      {/* <Container maxW="container.lg" p={5}>
        <Box textAlign="center" mb={10}>
          <Heading as="h1" size="2xl" mb={4} color="teal.600">
            Business Analysis Dashboard
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Insights for {companyUrl}
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={6}>
          <CompanyOverview />
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p={5}
            shadow="md"
            _hover={{ shadow: "lg" }}
            textAlign="center"
          >
            <Heading size="md">Impact of Generative AI</Heading>
            <Text mt={2}>
              This radar chart displays the impact score of different areas in
              generative AI on business operations.
            </Text>
            <RadarChartParent />
          </Box>
        </Grid>

        
      </Container> */}
    </motion.div>
  );
};

export default DashboardStep;
