// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#121212", // Dark background as per MUI dark theme
        color: "#E0E0E0", // Light typography color on dark background
      },
    },
  },
  colors: {
    primary: {
      500: "#BB86FC", // Material purple for primary elements (as in MUI dark theme)
    },
    secondary: {
      500: "#03DAC6", // Material teal for secondary elements
    },
    background: "#121212", // Background for cards or panels
    surface: "#1E1E1E", // Slightly elevated surfaces
    error: "#CF6679", // Error red in dark mode
    text: {
      primary: "#E0E0E0", // Primary text color in dark mode
      secondary: "#B0BEC5", // Secondary text (slightly muted)
      disabled: "#616161", // Disabled text
    },
  },
});

export default theme;
