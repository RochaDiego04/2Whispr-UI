import customTheme from "./theme/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import router from "./components/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
