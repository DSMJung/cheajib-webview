import BottomFixedTab from "../components/common/BottomFixedTab";
import FilteringButton from "../components/common/FilteringButton";
import Map from "../components/map/Map";
import MapRastaurantItem from "../components/map/MapRastaurantItem";

const MainMap = () => {
  return (
    <>
      <FilteringButton></FilteringButton>
      <Map></Map>
      <BottomFixedTab></BottomFixedTab>
      <MapRastaurantItem></MapRastaurantItem>
    </>
  );
};

export default MainMap;
