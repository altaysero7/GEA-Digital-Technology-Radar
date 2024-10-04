// Analyzing.js
import { motion } from "framer-motion";
import { useStepContext } from "./StepContext";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const Analyzing = () => {
  const { nextStep } = useStepContext();

  useEffect(() => {
    // Simulate analysis process (3 seconds), then move to next step (dashboard)
    const timer = setTimeout(() => {
      nextStep();
    }, 3000);

    return () => clearTimeout(timer);
  }, [nextStep]);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      background="url('./gradient.png')"
      //   bgGradient="radial-gradient(circle at 20% 20%, #a1c4fd, #c2e9fb, #76b4ff, #56ccf2);
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="analyzing-container"
      >
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="analyzing-text"
        >
          Analyzing the company data...
        </motion.h2>
        <motion.div
          className="analyzing-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 2, ease: "easeInOut" }}
        >
          {/* You can replace this with an animated spinner or loading bar */}
          <div className="loader"></div>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Analyzing;
