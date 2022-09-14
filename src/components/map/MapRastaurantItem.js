import RestaurantItem from "../restaurantList/RestaurantItem";
import brongs from "../../assets/test/brongs.png";
import styled from "@emotion/styled";
import { DefaultContainer } from "../common/DefaultContainer";

const MapRastaurantItem = () => {
  return (
    <DefaultWrapper>
      <MapRastaurantWrapper>
        <RestaurantItem
          address="서교동 346-39번지 하동 1층 마포구 서울특별시KR"
          rating="4.9"
          recommendMenu="우유 빵, 우유 라면"
          restaurantName="브롱스"
          restaurantImage={brongs}
          isCertification
        ></RestaurantItem>
      </MapRastaurantWrapper>
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.div`
  position: absolute;
  bottom: 65px;
  width: 100%;
  padding: 0 20px;
`;

const MapRastaurantWrapper = styled.div`
  width: 100%;
  background-color: white;
  min-height: 113px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 12px;
  overflow: hidden;
`;

export default MapRastaurantItem;
