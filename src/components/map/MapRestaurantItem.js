import RestaurantItem from "../restaurantList/RestaurantItem";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import queryKey from "../../utils/queryKey";
import { restaurantPreviewResource } from "../../utils/api/resource";
import { useRecoilValue } from "recoil";
import { restaurentSelectAtom } from "../../atom/restaurentSelectAtom";

const MapRestaurantItem = () => {
  const selectRestaurentValue = useRecoilValue(restaurentSelectAtom);
  const restaurentPreviewKey = queryKey.restaurents.restaurant_id(
    selectRestaurentValue
  );

  const { data: restaurentPreviewData } = useQuery(restaurentPreviewKey, () =>
    restaurantPreviewResource(selectRestaurentValue)
  );

  return (
    <DefaultWrapper>
      <MapRestaurantWrapper>
        <RestaurantItem
          address={restaurentPreviewData?.address}
          rating={restaurentPreviewData?.star_point}
          recommendMenu={restaurentPreviewData?.main_menu_list}
          restaurantName={restaurentPreviewData?.restaurant_name}
          restaurantImage={restaurentPreviewData?.main_image_url}
          isCertification={restaurentPreviewData?.is_verify}
        ></RestaurantItem>
      </MapRestaurantWrapper>
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.div`
  position: absolute;
  bottom: 65px;
  width: 100%;
  padding: 0 20px;
`;

const MapRestaurantWrapper = styled.div`
  width: 100%;
  background-color: white;
  min-height: 113px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 12px;
  overflow: hidden;
`;

export default MapRestaurantItem;
