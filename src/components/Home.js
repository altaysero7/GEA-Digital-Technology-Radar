// pages/index.js
import { useStepContext } from "../components/StepContext";
import { motion } from "framer-motion";
import CompanyUrlStep from "./CompanyUrlStep";
import DashboardStep from "./Dashboard";
import Analyzing from "./AnalyzingStep";

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export default function Home() {
  const { step } = useStepContext();

  return (
    <>
      <motion.div
        key={step}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {step === 1 && <CompanyUrlStep />}
        {step === 2 && <Analyzing />}
        {step === 3 && <DashboardStep />}
      </motion.div>
    </>
  );
}
