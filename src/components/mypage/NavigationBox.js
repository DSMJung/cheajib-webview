import styled from "@emotion/styled";
import Arrow from "../../assets/mypage/arrow.svg";

const NavigationBox = ({ subText, mainText, onClick }) => {
  return (
    <NavigationWrapper onClick={onClick}>
      <SubText>{subText}</SubText>
      {mainText()}
      <img src={Arrow} />
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  width: 100%;
  height: 64px;
  padding: 12px 20px;
  position: relative;
  background-repeat: no-repeat;
  background-position: 375px 50%;
  > img {
    position: absolute;
    right: 11px;
    bottom: 18px;
  }
`;

const SubText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.grey700};
  margin-bottom: 8px;
`;

export default NavigationBox;
