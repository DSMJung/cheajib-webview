import styled from "@emotion/styled";
import OwnerButton from "../owner/OwnerButton";
import IconButton from "../restaurantDetail/IconButton";
import Review from "./Review";
import ReviewAnswer from "./ReviewAnswer";
import pencil from "../../assets/restaurantDetail/buttonIcon/pencil.png";
import { useNavigate, useParams } from "react-router-dom";
const ReviewList = () => {
  const navigate = useNavigate();
  const { restaurant_id } = useParams();
  return (
    <>
      <ButtonContainer>
        <OwnerButton
          onClick={() => navigate(`/review_manage/${restaurant_id}`)}
        >
          리뷰 관리하기
        </OwnerButton>
      </ButtonContainer>
      <IconButton
        icon={pencil}
        onClick={() => navigate(`/review_select_menu/${restaurant_id}`)}
      ></IconButton>
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <ReviewAnswer
        content={`김의찬님, 저희 파스타를 맛있게 드셔주셔서 감사합니다^^
앞으로도 더 맛있는 파스타를 만들기 위해 노력하겠습니다`}
        date={"오늘"}
      ></ReviewAnswer>
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
    </>
  );
};

const ButtonContainer = styled.div`
  padding: 20px 21px;
`;

export default ReviewList;
