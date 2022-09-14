import styled from "@emotion/styled";
import BottomFixedTab from "../components/common/BottomFixedTab";
import { DefaultContainer } from "../components/common/DefaultContainer";
import {
  Logout,
  OwnerCertification,
  ReviewCheck,
  VegetarianStepsSet,
} from "../components/mypage/NavigationBoxContents";
import Profile from "../components/mypage/Profile";

const MyPage = () => {
  return (
    <DefaultContainer>
      <Profile email={"leerabi577@gmail.com"} name={"김의찬"}></Profile>
      <NavigaionBoxContainer>
        <VegetarianStepsSet></VegetarianStepsSet>
        <ReviewCheck></ReviewCheck>
        <OwnerCertification></OwnerCertification>
        <Logout></Logout>
      </NavigaionBoxContainer>
      <BottomFixedTab></BottomFixedTab>
    </DefaultContainer>
  );
};

const NavigaionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 0;
`;

export default MyPage;
