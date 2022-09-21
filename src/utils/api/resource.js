import queryKey from "../queryKey";
import { instance } from "./instance";

export const restaurentMapResource = async ({ x, y, level, star }) => {
  const resourceKey = queryKey.restaurents.map(x, y, level, star);
  return (await instance.get(resourceKey)).data;
};

export const restaurentPreviewListResource = async (x, y, level, star) => {
  const resourceKey = queryKey.restaurents.lists(x, y, level, star);
  return (await instance.get(resourceKey)).data;
};

export const menuResource = async (restaurents_id) => {
  const resourceKey = queryKey.restaurents.menu(restaurents_id);
  return (await instance.get(resourceKey)).data;
};

export const restaurentReviewListResource = async (restaurant_id) => {
  const resourceKey = queryKey.restaurents.reviews(restaurant_id);
  return (await instance.get(resourceKey)).data;
};

export const restaurantPreviewResource = async (restaurant_id) => {
  const resourceKey = queryKey.restaurents.restaurant_id(restaurant_id);
  return (await instance.get(resourceKey)).data;
};

export const restaurantDetailResource = async (restaurant_id) => {
  const resourceKey = queryKey.restaurents.detail(restaurant_id);
  return (await instance.get(resourceKey)).data;
};

export const menuListResource = async (restaurent_id) => {
  const resourceKey = queryKey.menu.restaurent_id(restaurent_id);
  return (await instance.get(resourceKey)).data;
};

export const levelResource = async () => {
  const resourceKey = queryKey.users.level();
  return (await instance.get(resourceKey)).data;
};

export const myReviewResource = async () => {
  const resourceKey = queryKey.review.my_review();
  return (await instance.get(resourceKey)).data;
};

export const myInfoResource = async () => {
  const resourceKey = queryKey.users.index();
  return (await instance.get(resourceKey)).data;
};

export const restaurentInfoResource = async (restaurant_id) => {
  const resourceKey = queryKey.restaurents.info(restaurant_id);
  return (await instance.get(resourceKey)).data;
};
