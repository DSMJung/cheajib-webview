import queryKey from "../queryKey";
import { instance } from "./instance";

export const restaurentResource = async ({ x, y, level, star }) => {
  const resourceKey = queryKey.restaurents.map();
  return (await instance.get(resourceKey, { x, y, level, star })).data;
};

export const menuResource = async (restaurents_id) => {
  const resourceKey = queryKey.restaurents.menu(restaurents_id);
  return (await instance.get(resourceKey)).data;
};

export const restaurentReviewListResource = async () => {
  const resourceKey = queryKey.restaurents.reviews();
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
