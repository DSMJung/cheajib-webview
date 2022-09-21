import { useRecoilValue } from "recoil";
import { restaurentSelectAtom } from "../atom/restaurentSelectAtom";
import BottomFixedTab from "../components/common/BottomFixedTab";
import FilteringButton from "../components/common/FilteringButton";
import Map from "../components/map/Map";
import MapRestaurantItem from "../components/map/MapRestaurantItem";

const MainMap = () => {
  const selectRestaurentValue = useRecoilValue(restaurentSelectAtom);
  return (
    <>
      <FilteringButton />
      <Map></Map>
      <BottomFixedTab></BottomFixedTab>
      {selectRestaurentValue && (
        <MapRestaurantItem restaurant_id={selectRestaurentValue} />
      )}
    </>
  );
};

export default MainMap;
