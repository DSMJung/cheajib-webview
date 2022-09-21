import styled from "@emotion/styled";
import OwnerButton from "../owner/OwnerButton";
import IconButton from "../restaurantDetail/IconButton";
import Review from "./Review";
import ReviewAnswer from "./ReviewAnswer";
import pencil from "../../assets/restaurantDetail/buttonIcon/pencil.png";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import queryKey from "../../utils/queryKey";
import { restaurentReviewListResource } from "../../utils/api/resource";
import dateFormet from "../../utils/function/dateFormet";
const ReviewList = () => {
  const navigate = useNavigate();
  const { restaurant_id } = useParams();
  const reviewListKey = queryKey.restaurents.reviews(restaurant_id);
  const { data: reviewListData } = useQuery(reviewListKey, () =>
    restaurentReviewListResource(restaurant_id)
  );
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
      />
      {reviewListData?.review_List.map((reviewInfo) => {
        return (
          <>
            <Review
              key={reviewInfo.review_id}
              content={reviewInfo.content}
              date={dateFormet(reviewInfo.created_at)}
              userName={reviewInfo.name}
              rating={reviewInfo.review_point}
              imageArr={reviewInfo.image_list}
            />
            {reviewInfo.review_comment && (
              <ReviewAnswer
                content={reviewInfo.review_comment.comment}
                date={dateFormet(reviewInfo.review_comment.created_at)}
              ></ReviewAnswer>
            )}
          </>
        );
      })}
    </>
  );
};

const ButtonContainer = styled.div`
  padding: 20px 21px;
`;

export default ReviewList;
