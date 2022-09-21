import { DefaultContainer } from "../components/common/DefaultContainer";
import NavBar from "../components/common/NavBar";
import RestaurantItem from "../components/restaurantList/RestaurantItem";
import styled from "@emotion/styled";
import FilteringButton from "../components/common/FilteringButton";
import BottomFixedTab from "../components/common/BottomFixedTab";
import { useNavigate } from "react-router-dom";
import queryKey from "../utils/queryKey";
import { useQuery } from "react-query";
import { restaurentPreviewListResource } from "../utils/api/resource";
import { useRecoilValue } from "recoil";
import { filteringAtom } from "../atom/filteringAtom";
import { currentLocationAtom } from "../atom/currentLocationAtom";

const RestaurantList = () => {
  const navigate = useNavigate();
  const filteringValue = useRecoilValue(filteringAtom);
  const currentLocationValue = useRecoilValue(currentLocationAtom);
  const restaurentListKey = queryKey.restaurents.lists(
    currentLocationValue.latitude,
    currentLocationValue.longitude,
    filteringValue.level,
    filteringValue.star
  );
  const { data: restaurentList } = useQuery(restaurentListKey, () =>
    restaurentPreviewListResource(
      currentLocationValue.latitude,
      currentLocationValue.longitude,
      filteringValue.level,
      filteringValue.star
    )
  );

  console.log(currentLocationValue, filteringValue);

  return (
    <>
      <NavBar
        isBlack
        pageTitle={"목록"}
        position="fixed"
        headerColor="white"
      ></NavBar>
      <FilteringButton />
      <RestaurantListContainer>
        {restaurentList?.restaurants_list.map(
          ({
            id,
            name,
            address,
            star_point,
            main_menu,
            image_url,
            is_verify,
          }) => (
            <RestaurantItem
              key={id}
              address={address}
              rating={star_point}
              recommendMenu={main_menu}
              restaurantName={name}
              restaurantImage={image_url}
              isCertification={is_verify}
              onClick={() => navigate(`/restaurant_detail/${id}`)}
            />
          )
        )}

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
