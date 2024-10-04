// components/CompanyUrlStep.js
import React, { useState } from "react";
import { Box, Button, Input, Text, Heading, Container } from "@chakra-ui/react";
import { useStepContext } from "./StepContext";

const CompanyUrlStep = () => {
  const { nextStep } = useStepContext();
  const [companyUrl, setCompanyUrl] = useState("");

  const handleNext = () => {
    if (companyUrl) {
      nextStep(companyUrl);
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection={"column"}
      justifyContent="flex-start"
      alignItems="flex-start"
      background="url('./gradient.png')"
      //   bgGradient="radial-gradient(circle at 20% 20%, #a1c4fd, #c2e9fb, #76b4ff, #56ccf2);
    >
      <Box width={"50%"} background={"rgb(0 0 0 / 90%)"} p={12} height={"100%"}>
        <Box borderRadius={"4px"} width={64}>
          <img src="/logo.svg" alt="Logo" />
        </Box>
        <Box textColor={"white"} mt={24}>
          <Heading size="lg" color={"gray.100"} mb={4}>
            Analyze Your Company
          </Heading>
          <Text color="gray.500" mb={6}>
            Enter your company URL to get started:
          </Text>
          <Input
            placeholder="https://yourcompany.com"
            value={companyUrl}
            onChange={(e) => setCompanyUrl(e.target.value)}
            mb={4}
          />
          <Button
            colorScheme="teal"
            onClick={handleNext}
            isDisabled={!companyUrl}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyUrlStep;
