import styled from "@emotion/styled";
import { useState } from "react";
import { DefaultContainer } from "../components/common/DefaultContainer";
import NavBar from "../components/common/NavBar";
import Tab from "../components/restaurantDetail/Tab";
import RestaurantTitle from "../components/restaurantDetail/RestaurantTitle";
import BottomFixedTab from "../components/common/BottomFixedTab";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import queryKey from "../utils/queryKey";
import { restaurantDetailResource } from "../utils/api/resource";
const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { restaurant_id } = useParams();
  const restaurentDetail = queryKey.restaurents.detail(restaurant_id);
  const { data: restaurentDetailData } = useQuery(restaurentDetail, () =>
    restaurantDetailResource(restaurant_id)
  );

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
      <TestImage src={restaurentDetailData?.image_url_list} />{" "}
      {/* 이미지 만들면 수정해야 하는 부분*/}
      <RestaurantTitle
        address={restaurentDetailData?.address}
        isCertification={restaurentDetailData?.is_verify}
        restaurantName={restaurentDetailData?.restaurant_name}
      />
      <Tab></Tab>
      <BottomFixedTab></BottomFixedTab>
    </DefaultContainer>
  );
};

const TestImage = styled.div`
  width: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.grey300};
  min-height: 256px;
`;

export default RestaurantDetail;
