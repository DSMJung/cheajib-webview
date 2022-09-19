import styled from "@emotion/styled";
import { useState } from "react";
import CheckBox from "../common/CheckBox";
import brongs from "../../assets/test/brongs.png";
const SelectMenu = () => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <ReviewMenuWrapper>
      <CheckBox isChecked={isCheck} onClick={setIsCheck}></CheckBox>
      <MenuTextWrapper>
        <TextHeader>
          우유 커피<i>4000원</i>
        </TextHeader>
        <DiscriptionBox>
          우유를 커피에 타먹는 신개념 방식의 우유 신제품 마시면 잠이 안오게 되는
          신박한 기능이 있음
        </DiscriptionBox>
      </MenuTextWrapper>
      <MenuImage src={brongs}></MenuImage>
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