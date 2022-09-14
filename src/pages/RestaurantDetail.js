import styled from "@emotion/styled";
import { useState } from "react";
import { DefaultContainer } from "../components/common/DefaultContainer";
import NavBar from "../components/common/NavBar";
import Tab from "../components/restaurantDetail/Tab";
import RestaurantTitle from "../components/restaurantDetail/RestaurantTitle";
import BottomFixedTab from "../components/common/BottomFixedTab";
import { useNavigate } from "react-router-dom";
const RestaurantDetail = () => {
  const navigate = useNavigate();
  return (
    <DefaultContainer>
      <NavBar
        isBack
        onClickBack={() => navigate(-1)}
        isBlack={false}
        position="absolute"
        headerColor="transparent"
        headerBox={false}
      ></NavBar>
      <TestImage /> {/* 이미지 만들면 수정해야 하는 부분*/}
      <RestaurantTitle
        address={"서교동 346-39번지 하동 1층 마포구 서울특별시 KR"}
        isCertification={false}
        restaurantName={"브롱스"}
      ></RestaurantTitle>
      <Tab></Tab>
      <BottomFixedTab></BottomFixedTab>
    </DefaultContainer>
  );
};

const TestImage = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.grey300};
  min-height: 256px;
`;

export default RestaurantDetail;
