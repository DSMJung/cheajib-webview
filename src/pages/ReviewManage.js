import styled from "@emotion/styled";
import NavBar from "../components/common/NavBar";
import OwnerButton from "../components/owner/OwnerButton";
import Review from "../components/review/Review";
import Reply from "../components/owner/Reply";
import ReviewAnswer from "../components/review/ReviewAnswer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewManage = () => {
  const [viewReply, setViewReply] = useState(false);
  const navigate = useNavigate();
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
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"오늘"}
        userName={"김의찬"}
        rating={4}
      />
      {viewReply ? (
        <Reply setViewReply={setViewReply} />
      ) : (
        <ButtonContainer>
          <OwnerButton
            onClick={() => setViewReply(true)}
            children={"답글 작성하기"}
          />
        </ButtonContainer>
      )}
      <Review
        content={`완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!
완전 맛있어요 최강이다 사장님 만수무강하세요~!!`}
        date={"어제"}
        userName={"정대현"}
        rating={5}
      />
      <ReviewAnswer
        content={`정대현님, 저희 파스타를 맛있게 드셔주셔서 감사합니다^^
파스타먹고 쑥쑥크세요`}
        date={"오늘"}
      />
    </>
  );
};

const ButtonContainer = styled.div`
  margin: 0 20px 24px;
`;

export default ReviewManage;
