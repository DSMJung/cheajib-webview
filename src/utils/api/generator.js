import axios from "axios";
import queryKey from "../queryKey";
import { instance } from "./instance";

export const loginGenerator = async () => {
  return (
    await axios.post(
      "https://nid.naver.com/oauth2.0/authorize?client_id=wl9JLG_UF_57OZZgjkms&response_type=code&redirect_uri=http://3.34.174.96:8080/naver/redirect&state=STATE_STRING"
    )
  ).data;
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

export const imageGenerator = async (BlobImages) => {
  const generatorKey = queryKey.images.index();
  const FNData = new FormData();
  BlobImages.map((imageBlob) => FNData.append("image", imageBlob), {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return (await instance.post(generatorKey, FNData)).data;
};

export const reviewGenerator = ({
  restaurent_id,
  review_point,
  image_list,
  content,
  menu_list,
}) => {
  const generatorKey = queryKey.review.restaurnat_id(restaurent_id);
  return instance.post(generatorKey, {
    review_point,
    image_list,
    content,
    menu_list,
  });
};

export const owenrCertificationGenerator = ({ id_card, business_card }) => {
  const generatorKey = queryKey.owner.index();
  return instance.post(generatorKey, {
    sex: "M",
    postal_code: "12345",
    address: "대전광역시 유성구 장동 76",
    detail_address: "대덕소프트웨어마이스터고등학교",
    owner_name: "김의찬",
    birth_date: "20040525",
    phone_number: "01012341234",
    id_card,
    business_card,
  });
};
