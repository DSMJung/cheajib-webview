import { atom } from "recoil";

export const ownerCertificationAtom = atom({
  key: "ownerCertification",
  default: {
    businessRegistration: {
      fileUrl: "",
      fileBlob: "",
    },
    registrationCard: {
      fileUrl: "",
      fileBlob: "",
    },
  },
});
