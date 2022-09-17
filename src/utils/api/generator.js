import queryKey from "../queryKey";
import { instance } from "./instance";

export const loginGenerator = async () => {
  const generatorKey = queryKey.users.index();
  return (await instance.post(generatorKey)).data;
};

//api 수정 필요
export const menuGenerator = async ({
  restaurent_id,
  name,
  price,
  description,
  menu_image,
  level,
}) => {
  const generatorKey = queryKey.menu.restaurent_id(restaurent_id);
  return instance.post(generatorKey, {
    name,
    price,
    description,
    menu_image,
    level,
  });
};
