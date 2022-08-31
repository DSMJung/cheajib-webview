import styled from "@emotion/styled";
import ReviewAnswer from "./ReviewAnswer";
import Rating from "../../common/Rating";

const Review = () => {
  return (
    <>
      <ReviewWrapper>
        <MeatballsMenu />
        <UserName>김의찬</UserName>
        <div style={{ display: "flex", margin: "8px 0 8px" }}>
          <Rating width={"68px"} readOnly value={5} />
          <Date>어제</Date>
        </div>
        <Content>
          완전 맛있어요 최강이다 사장님 만수무강하세요~!! 완전 맛있어요 최강이다
          사장님 만수무강하세요~!! 완전 맛있어요 최강이다 사장님
          만수무강하세요~!!
        </Content>
      </ReviewWrapper>
      <ReviewAnswer />
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

const MeatballsMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.grey700};
  height: 24px;
  width: 24px;
`;

export default Review;
