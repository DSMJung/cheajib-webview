import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import { DefaultContainer } from "../../components/common/DefaultContainer";
import NavBar from "../../components/common/NavBar";
import QImageBox from "../../components/common/QImageBox";
import Rating from "../../components/common/Rating";
import VegetarianStage from "../../components/common/VegetarianLevel";

const ReviewWrite = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  return (
    <DefaultContainer>
      <NavBar
        isBack
        isBlack
        pageTitle={"브롱스"}
        position="fixed"
        headerBox
        onClickBack={() => navigate(-1)}
      ></NavBar>
      <RactingWrapper>
        <Rating width={"187px"}></Rating>
      </RactingWrapper>
      <LeadText>리뷰를 작성해주세요</LeadText>
      <QImageBox
        setImageState={setImages}
        imageState={images}
        justifyContent="center"
        maxImage={4}
      />
      <InputsWrapper>
        <ReviewTextArea placeholder="음식에 대한 솔직한 리뷰를 남겨주세요"></ReviewTextArea>
        <SelectVeganLevelWrapper>
          <VeganLevelSelectHeader>
            <VegetarianText>
              우유 라면의 채식 단계는 <i>락토∙오보</i>입니다.
            </VegetarianText>
            <span>선택안함</span>
          </VeganLevelSelectHeader>
          <VegetarianStage></VegetarianStage>
        </SelectVeganLevelWrapper>
      </InputsWrapper>

      <BottomFixedButton
        isFill
        onClick={() => navigate("/rastaurant_detail/1")}
      >
        완료
      </BottomFixedButton>
    </DefaultContainer>
  );
};

const RactingWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: center;
`;

const LeadText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.grey700};
  margin-bottom: 22px;
`;

const InputsWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 20px 16px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.grey300};
  resize: none;
  border-radius: 8px;
  font-size: 14px;
  margin: 32px 0;
  color: ${({ theme }) => theme.grey700};
`;

const VeganLevelSelectHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  > span {
    color: ${({ theme }) => theme.grey500};
    text-decoration-line: underline;
    font-size: 12px;
  }
`;

const SelectVeganLevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
`;

const VegetarianText = styled.p`
  display: inline;
  font-size: 14px;
  font-weight: 400;
  > i {
    color: ${({ theme }) => theme.main};
  }
`;
export default ReviewWrite;
