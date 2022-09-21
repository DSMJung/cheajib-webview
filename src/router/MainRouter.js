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
  TermsOfService,
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
          path="restaurant_detail/:restaurant_id"
          element={<RestaurantDetail />}
        ></Route>
        <Route path="add_menu/:restaurant_id" element={<AddMenu />}></Route>
        <Route
          path="review_write/:restaurant_id"
          element={<ReviewWrite />}
        ></Route>
        <Route
          path="review_select_menu/:restaurant_id"
          element={<ReviewSelectMenu />}
        ></Route>
        <Route
          path="business_registration"
          element={<BusinessRegistration />}
        ></Route>
        <Route
          path="registration_card_check"
          element={<RegistrationCardCheck />}
        ></Route>
        <Route path="terms_of_service" element={<TermsOfService />}></Route>
        <Route path="review_look_up" element={<ReviewLookUp />}></Route>
        <Route
          path="review_manage/:restaurant_id"
          element={<ReviewManage />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
