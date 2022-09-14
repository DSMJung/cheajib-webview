import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import Map from "./components/map/Map";
import Test from "./pages/Test";
import RestaurantList from "./pages/RestaurantList";
import RestaurantDetail from "./pages/RestaurantDetail";
import MyPage from "./pages/MyPage";
import MainMap from "./pages/MainMap";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
