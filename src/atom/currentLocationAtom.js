import { atom } from "recoil";

export const currentLocationAtom = atom({
  key: "currentLocationKey",
  default: {
    latitude: null,
    longitude: null,
  },
});
