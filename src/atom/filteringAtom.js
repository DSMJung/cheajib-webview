import { atom } from "recoil";

export const filteringAtom = atom({
  key: "filteringKey",
  default: {
    level: "FLEXITARIAN",
    star: 1,
  },
});
