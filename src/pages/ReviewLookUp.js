import { useNavigate } from "react-router-dom";
import { DefaultContainer } from "../components/common/DefaultContainer";
import NavBar from "../components/common/NavBar";
import MyReivew from "../components/mypage/LookupReview/MyReview";

const ReviewLookUp = () => {
  const navigate = useNavigate();
  return (
    <DefaultContainer>
      <NavBar
        isBack
        isBlack
        onClickBack={() => navigate(-1)}
        headerColor="white"
        position="fixed"
        pageTitle={"리뷰조회"}
      ></NavBar>
      <MyReivew
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        imageArr={[]}
        onClickDelete={() => {}}
        onClickRestaurentName={() => {}}
        rating={4}
        restaurantName={"브롱스"}
      ></MyReivew>
      <MyReivew
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        imageArr={[]}
        onClickDelete={() => {}}
        onClickRestaurentName={() => {}}
        rating={4}
        restaurantName={"브롱스"}
      ></MyReivew>
      <MyReivew
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        imageArr={[]}
        onClickDelete={() => {}}
        onClickRestaurentName={() => {}}
        rating={4}
        restaurantName={"브롱스"}
      ></MyReivew>
      <MyReivew
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        imageArr={[]}
        onClickDelete={() => {}}
        onClickRestaurentName={() => {}}
        rating={4}
        restaurantName={"브롱스"}
      ></MyReivew>
      <MyReivew
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        imageArr={[]}
        onClickDelete={() => {}}
        onClickRestaurentName={() => {}}
        rating={4}
        restaurantName={"브롱스"}
      ></MyReivew>
      <MyReivew
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        imageArr={[]}
        onClickDelete={() => {}}
        onClickRestaurentName={() => {}}
        rating={4}
        restaurantName={"브롱스"}
      ></MyReivew>
      <MyReivew
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        imageArr={[]}
        onClickDelete={() => {}}
        onClickRestaurentName={() => {}}
        rating={4}
        restaurantName={"브롱스"}
      ></MyReivew>
    </DefaultContainer>
  );
};

export default ReviewLookUp;
