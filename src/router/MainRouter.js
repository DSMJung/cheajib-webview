import { Route, Routes } from "react-router-dom";
import {
  Login,
  MainMap,
  RestaurantDetail,
  RestaurantList,
  ReviewLookUp,
} from "../pages";
import MyPage from "../pages/MyPage";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />}></Route>
        <Route path="map" element={<MainMap />}></Route>
        <Route path="my_page" element={<MyPage />}></Route>
        <Route path="restaurant_list" element={<RestaurantList />}></Route>
        <Route
          path="rastaurant_detail/:restaurant"
          element={<RestaurantDetail />}
        ></Route>
        <Route path="test" element={<ReviewLookUp />}></Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
