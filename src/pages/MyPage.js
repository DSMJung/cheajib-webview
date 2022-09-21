import styled from "@emotion/styled";
import { useQuery } from "react-query";
import BottomFixedTab from "../components/common/BottomFixedTab";
import { DefaultContainer } from "../components/common/DefaultContainer";
import {
  Logout,
  OwnerCertification,
  ReviewCheck,
  VegetarianStepsSet,
} from "../components/mypage/NavigationBoxContents";
import Profile from "../components/mypage/Profile";
import { myInfoResource } from "../utils/api/resource";
import queryKey from "../utils/queryKey";

const MyPage = () => {
  const myInfoKey = queryKey.users.index();
  const { data: myInfoData } = useQuery(myInfoKey, myInfoResource);
  return (
    <DefaultContainer>
      <Profile email={myInfoData?.email} name={myInfoData?.name}></Profile>
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
