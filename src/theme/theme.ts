import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#38bdf8", // Sky blue
      dark: "#0ea5e9", // Deeper sky
      light: "#7dd3fc", // Soft sky highlight
    },
    secondary: {
      main: "#60a5fa", // Muted blue
      light: "#93c5fd", // Lighter secondary
    },
    background: {
      default: "#0f172a", // Deep navy/blue-gray
      paper: "#1e293b", // Dark surface
    },
    text: {
      primary: "#e0f2fe", // Light sky blue
      secondary: "#94a3b8", // Muted steel
    },
    error: {
      main: "#ef4444", // Red
    },
    success: {
      main: "#22c55e", // Green
    },
    warning: {
      main: "#facc15", // Yellow
    },
    info: {
      main: "#0ea5e9", // Sky blue info
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
