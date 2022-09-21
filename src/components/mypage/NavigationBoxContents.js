import styled from "@emotion/styled";
import NavigationBox from "./NavigationBox";
import VegetarianStage from "../common/VegetarianLevel";
import { useState } from "react";
import { veganLevelToKorean } from "../../utils/function/veganLevelToKorean";
import { useNavigate } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "react-query";
import { levelResource, myInfoResource } from "../../utils/api/resource";
import queryKey from "../../utils/queryKey";
import { vegetarianLevelConverter } from "../../utils/api/converter";

export const ReviewCheck = () => {
  const navigate = useNavigate();

  return (
    <NavigationBox
      subText="리뷰 조회하기"
      mainText={ReviewCheckText}
      onClick={() => navigate("/review_look_up")}
    />
  );
};

export const OwnerCertification = () => {
  const navigate = useNavigate();

  return (
    <NavigationBox
      subText="식당 사장님이신가요?"
      mainText={OwnerCertificationText}
      onClick={() => navigate("/registration_card_check")}
    />
  );
};

export const Logout = () => {
  const navigate = useNavigate();

  return (
    <NavigationBox
      subText="기기 내 계정에서 로그아웃하기"
      mainText={LogoutText}
      onClick={() => navigate("/")}
    />
  );
};

export const VegetarianStepsSet = () => {
  const levelResourceKey = queryKey.users.level();
  const { data: levelData, refetch } = useQuery(
    levelResourceKey,
    levelResource
  );
  const { mutate: levelMutate } = useMutation(vegetarianLevelConverter, {
    onSuccess: () => refetch(),
  });
  const myInfoKey = queryKey.users.index();
  const { data: myInfoData } = useQuery(myInfoKey, myInfoResource);
  return (
    <FillteringContainer>
      <SubText>채식 단계 설정</SubText>
      <TextBox>
        <MainText>현재 {myInfoData?.name}님의 채식 단계는&nbsp;</MainText>
        <HighlightText>{veganLevelToKorean(levelData?.level)}</HighlightText>
        <MainText>입니다</MainText>
      </TextBox>
      <VegetarianStage
        style={{ marginTop: "8px" }}
        onChangeLevel={levelMutate}
        initalState={levelData?.level}
      ></VegetarianStage>
    </FillteringContainer>
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

const FillteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 8px;
`;

const SubText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.grey700};
`;

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
