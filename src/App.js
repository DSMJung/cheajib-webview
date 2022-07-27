import { Global, ThemeProvider } from "@emotion/react";

import { globalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
}

export default App;
