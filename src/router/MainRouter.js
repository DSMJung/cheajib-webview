import { Route, Routes } from "react-router-dom";
import {
  AddMenu,
  BusinessRegistration,
  Login,
  MainMap,
  RegistrationCardCheck,
  RestaurantDetail,
  RestaurantList,
  ReviewLookUp,
  ReviewManage,
  ReviewSelectMenu,
  ReviewWrite,
  Test,
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
        <Route path="add_menu" element={<AddMenu />}></Route>
        <Route path="review_write" element={<ReviewWrite />}></Route>
        <Route path="review_select_menu" element={<ReviewSelectMenu />}></Route>
        <Route
          path="business_registration"
          element={<BusinessRegistration />}
        ></Route>
        <Route
          path="registration_card_check"
          element={<RegistrationCardCheck />}
        ></Route>
        <Route path="review_look_up" element={<ReviewLookUp />}></Route>
        <Route path="review_manage" element={<ReviewManage />}></Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
