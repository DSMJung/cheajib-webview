import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CheckBox from "../common/CheckBox";

const SelectMenu = ({
  name,
  description,
  price,
  menu_image_url,
  onCheck,
  menu_id,
}) => {
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    isCheck
      ? onCheck((state) => [...state, { menu_id, level: "FLEXITAREAN", name }])
      : onCheck((state) => state.fileter((info) => info.menu_id !== menu_id));
  }, [isCheck, menu_id, onCheck, name]);

  return (
    <ReviewMenuWrapper>
      <CheckBox
        isChecked={isCheck}
        onClick={() => {
          setIsCheck(!isCheck);
        }}
      ></CheckBox>
      <MenuTextWrapper>
        <TextHeader>
          {name}
          <i>{price}원</i>
        </TextHeader>
        <DiscriptionBox>{description}</DiscriptionBox>
      </MenuTextWrapper>
      <MenuImage src={menu_image_url | ""}></MenuImage>
    </ReviewMenuWrapper>
  );
};

const ReviewMenuWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  height: 113px;
  display: flex;
  align-items: center;
`;

const MenuTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 12px;
`;

const TextHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  color: ${({ theme }) => theme.grey900};
  font-size: 16px;
  font-weight: 600;
  > i {
    color: ${({ theme }) => theme.grey700};
    font-size: 12px;
    font-weight: 500;
  }
`;

const DiscriptionBox = styled.div`
  font-weight: 400;
  width: 243px;
  height: 48px;
  font-size: 14px;
  color: ${({ theme }) => theme.grey900};
`;

const MenuImage = styled.div`
  margin-left: auto;
  width: 81px;
  height: 81px;
  border-radius: 4px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export default SelectMenu;
