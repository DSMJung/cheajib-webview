import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { DefaultContainer } from "../components/common/DefaultContainer";
import NavBar from "../components/common/NavBar";
import MyReivew from "../components/mypage/LookupReview/MyReview";
import { myReviewResource } from "../utils/api/resource";
import queryKey from "../utils/queryKey";

const ReviewLookUp = () => {
  const navigate = useNavigate();

  const myReviewKey = queryKey.review.my_review();
  const { data: myReviewData } = useQuery(myReviewKey, myReviewResource);
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
      {myReviewData?.review_list.map(
        (
          {
            created_at,
            content,
            review_point,
            restaurant_name,
            owner_review,
            restaurant_list,
          },
          idx
        ) => (
          <MyReivew
            key={idx}
            date={created_at}
            content={content}
            rating={review_point}
            restaurantName={restaurant_name}
            answerContent={owner_review.comment}
            answerDate={owner_review.created_at}
            restaurantId={restaurant_list}
          />
        )
      )}
      {/* <MyReivew
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
      ></MyReivew> */}
    </DefaultContainer>
  );
};

export default ReviewLookUp;
