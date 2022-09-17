import queryKey from "../queryKey";
import { instance } from "./instance";

export const vegetarianLevelConverter = (level) => {
  const converterKey = queryKey.users.level();
  return instance.patch(converterKey, {
    level,
  });
};

export const MenuDeleteConverter = (menu_id) => {
  const converterKey = queryKey.menu.menu_id(menu_id);
  return instance.delete(converterKey);
};
