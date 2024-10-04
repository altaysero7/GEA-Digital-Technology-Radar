import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
// pages/_app.js
import { StepProvider } from "./components/StepContext";
import Home from "./components/Home";
import theme from "./theme";

function MyApp({ Component, pageProps }) {
  return (
    <StepProvider>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </StepProvider>
  );
}

export default MyApp;
