import styled from "@emotion/styled";
import Rating from "../common/Rating";
import ReviewImage from "./ReviewImage";
import MeatballsMenu from "../../assets/common/meatballsMenu.png";

const Review = ({ userName, date, content, rating, imageArr }) => {
  return (
    <>
      <ReviewWrapper>
        <ReviewImage imageArray={imageArr || []}></ReviewImage>
        <img
          src={MeatballsMenu}
          style={{ position: "absolute", top: 0, right: 0 }}
        />
        <UserName>{userName}</UserName>
        <div style={{ display: "flex", margin: "8px 0 8px" }}>
          <Rating width={"68px"} readOnly value={rating} />
          <Date>{date}</Date>
        </div>
        <Content>{content}</Content>
      </ReviewWrapper>
    </>
  );
};

const ReviewWrapper = styled.div`
  position: relative;
  margin: 0 18px 12px 20px;
`;

const UserName = styled.p`
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

export default Review;
