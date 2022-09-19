import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    })
  );
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
