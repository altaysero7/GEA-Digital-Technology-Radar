// import React from 'react';
// import './ImpactScoreExplanation.css';

// const ImpactScoreExplanation = () => {
//     return (
//         <section className="impact-score-explanation">
//             <h3>How We Calculate the Impact Score</h3>
//             <p className="intro-text">
//                 The <strong>impact score</strong> reflects the potential of each technology to drive business value and transformation. It is determined by evaluating a combination of factors, such as market size, growth potential, industry adoption, and technological maturity. Here's how we break it down:
//             </p>
//             <div className="calculation-factors">
//                 <div className="factor">
//                     <span className="icon">📈</span>
//                     <h4>Market Potential (40%)</h4>
//                     <p>
//                         Market potential is the most critical factor in determining the overall impact of a technology. It accounts for 40% of the score because it reflects the projected market size, growth rate, and overall demand for the technology. A large market with strong growth potential is a key driver of business value.
//                     </p>
//                 </div>
//                 <div className="factor">
//                     <span className="icon">🏢</span>
//                     <h4>Industry Adoption (30%)</h4>
//                     <p>
//                         Industry adoption is the second most important factor, contributing 30% to the impact score. This measures how quickly and broadly the technology is being adopted across key industries. Technologies that have strong use cases and rapid adoption rates across multiple sectors are more likely to have a higher impact.
//                     </p>
//                 </div>
//                 <div className="factor">
//                     <span className="icon">💡</span>
//                     <h4>Technological Maturity (30%)</h4>
//                     <p>
//                         Technological maturity also accounts for 30% of the score. This factor assesses how well-developed and reliable the technology is. A mature technology that has been proven in real-world applications is more likely to have a higher immediate impact compared to emerging technologies that are still in the experimental or developmental phase.
//                     </p>
//                 </div>
//             </div>

//             <h4>Example Calculation</h4>
//             <p className="example-text">
//                 For instance, <strong>Augmented Reality (AR)</strong> scores 9 based on the following weighted formula:
//             </p>

//             <div className="formula-section">
//                 <h4>The Formula</h4>
//                 <p className="formula">
//                     <strong>Impact Score</strong> = (0.4 × <strong>Market Potential</strong>) + (0.3 × <strong>Industry Adoption</strong>) + (0.3 × <strong>Technological Maturity</strong>)
//                 </p>
//             </div>

//             <ul className="example-list">
//                 <li>📈 <strong>Market Potential:</strong> 10 (AR market expected to reach $198 billion by 2025 with a CAGR of 25%)</li>
//                 <li>🏢 <strong>Industry Adoption:</strong> 9 (Adopted rapidly across sectors such as retail, real estate, and training)</li>
//                 <li>💡 <strong>Technological Maturity:</strong> 8 (Well-established in many industries, with active use cases)</li>
//             </ul>

//             <p className="calculation">
//                 Combining these factors: <br />
//                 <strong>Impact Score</strong> = (0.4 × 10) + (0.3 × 9) + (0.3 × 8) = 9
//             </p>

//             <p className="conclusion-text">
//                 Based on this formula, AR receives an impact score of <strong>9</strong> out of 10.
//             </p>
//         </section>
//     );
// };

// export default ImpactScoreExplanation;
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const ImpactScoreExplanation = () => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <Heading as="h3" size="lg" mb={4} color="#FFFFFF">
          {" "}
          {/* White for headings */}
          <AccordionButton>How We Calculate the Impact Score</AccordionButton>
        </Heading>
        <AccordionPanel>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            p={8}
            bg="#121212"
            color="#E0E0E0"
          >
            {/* Section Heading */}

            <Text mb={6} color="#B0B0B0">
              {" "}
              {/* Gray for secondary text */}
              The <strong>impact score</strong> reflects the potential of each
              technology to drive business value and transformation. It is
              determined by evaluating a combination of factors, such as market
              size, growth potential, industry adoption, and technological
              maturity. Here's how we break it down:
            </Text>
            <Flex justifyContent="space-between" wrap="wrap" gap={4} mt={6}>
              {/* Market Potential */}
              <Box
                w={{ base: "100%", md: "30%" }} // Full width on mobile, 30% on desktop
                p={4}
                bg="#1E1E1E"
                borderRadius="md"
                boxShadow="lg"
              >
                <Flex alignItems="center" mb={4}>
                  <Box boxSize={6} mr={3}>
                    📈
                  </Box>
                  <Heading as="h4" size="md" color="#FFFFFF">
                    Market Potential (40%)
                  </Heading>
                </Flex>
                <Text color="#E0E0E0">
                  Market potential is the most critical factor in determining
                  the overall impact of a technology. It accounts for 40% of the
                  score because it reflects the projected market size, growth
                  rate, and overall demand for the technology.
                </Text>
              </Box>

              {/* Industry Adoption */}
              <Box
                w={{ base: "100%", md: "30%" }}
                p={4}
                bg="#1E1E1E"
                borderRadius="md"
                boxShadow="lg"
              >
                <Flex alignItems="center" mb={4}>
                  <Box boxSize={6} mr={3}>
                    🏢
                  </Box>
                  <Heading as="h4" size="md" color="#FFFFFF">
                    Industry Adoption (30%)
                  </Heading>
                </Flex>
                <Text color="#E0E0E0">
                  Industry adoption measures how quickly and broadly the
                  technology is being adopted across industries, contributing
                  30% to the overall score.
                </Text>
              </Box>

              {/* Technological Maturity */}
              <Box
                w={{ base: "100%", md: "30%" }}
                p={4}
                bg="#1E1E1E"
                borderRadius="md"
                boxShadow="lg"
              >
                <Flex alignItems="center" mb={4}>
                  <Box boxSize={6} mr={3}>
                    💡
                  </Box>
                  <Heading as="h4" size="md" color="#FFFFFF">
                    Technological Maturity (30%)
                  </Heading>
                </Flex>
                <Text color="#E0E0E0">
                  Technological maturity assesses how well-developed and
                  reliable the technology is, accounting for 30% of the score.
                </Text>
              </Box>
            </Flex>

            {/* Example Calculation */}
            <Box mt={8}>
              <Heading as="h4" size="md" mb={4} color="#FFFFFF">
                Example Calculation
              </Heading>
              <Text mb={4} color="#B0B0B0">
                For instance, <strong>Augmented Reality (AR)</strong> scores 9
                based on the following weighted formula:
              </Text>

              <Box
                p={4}
                borderWidth={1}
                borderRadius="lg"
                borderColor="#B0B0B0"
              >
                <Heading as="h4" size="md" mb={4} color="#FFFFFF">
                  The Formula
                </Heading>
                <Text color="#E0E0E0">
                  <strong>Impact Score</strong> = (0.4 ×{" "}
                  <strong>Market Potential</strong>) + (0.3 ×{" "}
                  <strong>Industry Adoption</strong>) + (0.3 ×{" "}
                  <strong>Technological Maturity</strong>)
                </Text>
              </Box>

              {/* Example List */}
              <Box as="ul" mt={6} pl={4} color="#E0E0E0">
                <Box as="li" mb={3}>
                  📈 <strong>Market Potential:</strong> 10 (AR market expected
                  to reach $198 billion by 2025 with a CAGR of 25%)
                </Box>
                <Box as="li" mb={3}>
                  🏢 <strong>Industry Adoption:</strong> 9 (Adopted rapidly
                  across sectors such as retail, real estate, and training)
                </Box>
                <Box as="li">
                  💡 <strong>Technological Maturity:</strong> 8
                  (Well-established in many industries, with active use cases)
                </Box>
              </Box>

              {/* Final Calculation */}
              <Text mt={4} color="#E0E0E0">
                Combining these factors: <br />
                <strong>Impact Score</strong> = (0.4 × 10) + (0.3 × 9) + (0.3 ×
                8) = 9
              </Text>

              <Text mt={4} color="#E0E0E0">
                Based on this formula, AR receives an impact score of{" "}
                <strong>9</strong> out of 10.
              </Text>
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ImpactScoreExplanation;
