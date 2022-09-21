import styled from "@emotion/styled";
import NavBar from "../components/common/NavBar";
import OwnerButton from "../components/owner/OwnerButton";
import Review from "../components/review/Review";
import Reply from "../components/owner/Reply";
import ReviewAnswer from "../components/review/ReviewAnswer";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import queryKey from "../utils/queryKey";
import { useQuery } from "react-query";
import { restaurentReviewListResource } from "../utils/api/resource";

const ReviewManage = () => {
  const navigate = useNavigate();
  const { restaurant_id } = useParams();
  const reviewListKey = queryKey.review.restaurant_id(restaurant_id);
  const [replyComment, setReplyComment] = useState({});
  const { data: reviewListData, refetch: reviewListRefetch } = useQuery(
    reviewListKey,
    () => restaurentReviewListResource(restaurant_id)
  );
  return (
    <>
      <NavBar
        isBack
        isBlack
        pageTitle={"리뷰관리"}
        onClickBack={() => navigate(-1)}
        headerBox={true}
        position="absolute"
      />
      {reviewListData?.review_List.map(
        ({
          content,
          created_at,
          image_list,
          review_point,
          review_comment,
          review_id,
        }) => (
          <div key={review_id} style={{ width: "100%", height: "100%" }}>
            <Review
              content={content}
              date={created_at}
              imageArr={image_list}
              rating={review_point}
            />
            {review_comment.comment && review_comment.created_at ? (
              <ReviewAnswer
                content={review_comment.comment}
                date={review_comment.created_at}
              />
            ) : replyComment.review_id ? (
              <Reply
                setReplyComment={setReplyComment}
                replyComment={replyComment}
                review_id={review_id}
                reviewListRefetch={reviewListRefetch}
              />
            ) : (
              <ButtonContainer>
                <OwnerButton
                  onClick={() =>
                    setReplyComment((state) => ({ ...state, [review_id]: "" }))
                  }
                  children={"답글 작성하기"}
                />
              </ButtonContainer>
            )}
          </div>
        )
      )}
    </>
  );
};

const ButtonContainer = styled.div`
  margin: 0 20px 24px;
`;

export default ReviewManage;
