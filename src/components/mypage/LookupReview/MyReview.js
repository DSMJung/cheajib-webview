import ReviewAnswer from "../../review/ReviewAnswer";
import ReviewImage from "../../review/ReviewImage";
import styled from "@emotion/styled";
import Rating from "../../common/Rating";
import Arrow from "../../../assets/mypage/arrow.svg";
import { useNavigate } from "react-router-dom";

const MyReview = ({
  restaurantName,
  date,
  content,
  rating,
  imageArr,
  restaurantId,
  onClickDelete,
  answerContent,
  answerDate,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <ReviewWrapper>
        <ReviewImage imageArray={imageArr || []} />
        <div style={{ position: "relative" }}>
          <Delete onClick={onClickDelete}>삭제</Delete>
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => navigate(`/restaurent_detail/${restaurantId}`)}
          >
            <RestaurantName>{restaurantName}</RestaurantName>
            <img src={Arrow} style={{ width: "22px", marginTop: "2px" }} />
          </div>
          <div style={{ display: "flex", margin: "6px 0 8px" }}>
            <Rating width={"68px"} readOnly value={rating} />
            <Date>{date}</Date>
          </div>
          <Content>{content}</Content>
        </div>
      </ReviewWrapper>
      {answerContent && answerDate && (
        <ReviewAnswer content={answerContent} date={answerDate} />
      )}
    </>
  );
};

const ReviewWrapper = styled.div`
  position: relative;
  margin: 0 18px 12px 20px;
`;

const RestaurantName = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

const Date = styled.p`
  font-size: 12px;
  margin-left: 8px;
  color: ${({ theme }) => theme.grey700};
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.grey900};
`;

const Delete = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  line-height: 16px;
  font-size: 12px;
  margin-top: 6px;
  color: ${({ theme }) => theme.system_red};
`;

export default MyReview;
