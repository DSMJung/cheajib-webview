import BottomFixedTab from "../components/common/BottomFixedTab";
import FilteringButton from "../components/common/FilteringButton";
import Map from "../components/map/Map";
import MapRestaurantItem from "../components/map/MapRastaurantItem";

const MainMap = () => {
  return (
    <>
      <FilteringButton></FilteringButton>
      <Map></Map>
      <BottomFixedTab></BottomFixedTab>
      <MapRestaurantItem></MapRestaurantItem>
    </>
  );
};

export default MainMap;
