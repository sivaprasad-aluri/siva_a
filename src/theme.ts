// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#9c27b0", // Custom secondary color
    },
  },
  typography: {
    fontFamily: "Poppins, serif",
  },
});

export default theme;
