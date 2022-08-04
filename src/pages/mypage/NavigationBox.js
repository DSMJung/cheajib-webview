import styled from "@emotion/styled";
import NavigationBox from "../../components/mypage/NavigationBox";

export const ReviewCheck = () => {
  return <NavigationBox subText="리뷰 조회하기" mainText={ReviewCheckText} />;
};

export const OwnerCertification = () => {
  return (
    <NavigationBox
      subText="식당 사장님이신가요?"
      mainText={OwnerCertificationText}
    />
  );
};

export const Logout = () => {
  return (
    <NavigationBox
      subText="기기 내 계정에서 로그아웃하기"
      mainText={LogoutText}
    />
  );
};

const ReviewCheckText = () => {
  return (
    <TextBox>
      <MainText>총&nbsp;</MainText>
      <HighlightText>1</HighlightText>
      <MainText>개의 식당,&nbsp;</MainText>
      <HighlightText>4</HighlightText>
      <MainText>개의 메뉴를 평가하셨습니다 :&#41;</MainText>
    </TextBox>
  );
};

const OwnerCertificationText = () => {
  return <MainText>사장님 인증하러가기</MainText>;
};

const LogoutText = () => {
  return <MainText>로그아웃</MainText>;
};

const TextBox = styled.div`
  display: flex;
`;

const HighlightText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.main};
`;

const MainText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.grey900};
`;

export default NavigationBox;
