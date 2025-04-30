import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Container>
        <h1>Dark Mode</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
