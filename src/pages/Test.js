import BottomFixedButton from "../components/common/BottomFixedButton";
import DefaultButton from "../components/common/DefaultButton";
import { DefaultContainer } from "../components/common/DefaultContainer";
import FilteringButton from "../components/common/FilteringButton";
import NavBar from "../components/common/NavBar";
import Rating from "../components/common/Rating";
import VegetarianStage from "../components/common/VegetarianLevel";
import MenuItem from "../components/restaurantDetail/MenuItem";
import RestaurantItem from "../components/restaurantList/RestaurantItem";

const Test = () => {
  return (
    <>
      <DefaultContainer>
        <FilteringButton></FilteringButton>
        <Rating width={"100px"} readOnly value={4.1}></Rating>
        <BottomFixedButton isFill>다음</BottomFixedButton>
      </DefaultContainer>
    </>
  );
};

export default Test;
