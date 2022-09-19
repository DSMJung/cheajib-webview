import { DefaultContainer } from "../components/common/DefaultContainer";
import NavBar from "../components/common/NavBar";
import RestaurantItem from "../components/restaurantList/RestaurantItem";
import brongs from "../assets/test/brongs.png";
import styled from "@emotion/styled";
import FilteringButton from "../components/common/FilteringButton";
import { BottomSheet } from "react-spring-bottom-sheet";
import BottomFixedButton from "../components/common/BottomFixedButton";
import BottomFixedTab from "../components/common/BottomFixedTab";
import { useNavigate } from "react-router-dom";

const RestaurantList = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar
        isBlack
        pageTitle={"목록"}
        position="fixed"
        headerColor="white"
      ></NavBar>
      <FilteringButton></FilteringButton>
      <RestaurantListContainer>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          restaurantImage={brongs}
          isCertification
          onClick={() =>
            navigate("/rastaurant_detail/b1dcfd2e-9116-4f8b-a239-d97ebc0c70d3")
          }
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          restaurantImage={brongs}
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          restaurantImage={brongs}
          isCertification
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          isCertification
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          isCertification
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          isCertification
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          isCertification
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          isCertification
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          isCertification
        ></RestaurantItem>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          isCertification
        ></RestaurantItem>
        <BottomFixedTab></BottomFixedTab>
      </RestaurantListContainer>
    </>
  );
};

const RestaurantListContainer = styled(DefaultContainer)`
  > * + * {
    border-top: 1px solid ${({ theme }) => theme.grey500};
  }
`;

export default RestaurantList;
