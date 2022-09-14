import styled from "@emotion/styled";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import Filter from "../../assets/common/Filter";
import "../../styles/bottomSheet.css";
import { veganLevelToKorean } from "../../utils/function/veganLevelToKorean";
import BottomFixedButton from "./BottomFixedButton";
import Rating from "./Rating";
import VegetarianStage from "./VegetarianLevel";
const FilteringButton = () => {
  const [open, setOpen] = useState(false);
  const [veganLevel, setVeganLevel] = useState("flexitarian");
  const [rating, setRating] = useState(1);
  return (
    <>
      <ButtonContainer onClick={() => setOpen(!open)}>
        <Filter></Filter>
        <BottomSheet open={open} className="zIndexUp">
          <BottomSheetContainer onClick={(e) => e.stopPropagation()}>
            <Title>필터</Title>
            <Container>
              <Discription>
                현재 설정 단계는 <i>{veganLevelToKorean(veganLevel)}</i> 입니다
              </Discription>
              <VegetarianStage
                onChangeLevel={setVeganLevel}
                initalState={veganLevel}
              ></VegetarianStage>
            </Container>
            <Container>
              <Discription>
                현재 설정 별점은 <i>{rating}.0+</i> 입니다
              </Discription>
              <RatingWrapper>
                <Rating
                  width="280px"
                  value={rating}
                  onChange={setRating}
                ></Rating>
              </RatingWrapper>
            </Container>

            <BottomFixedButton
              isFill
              onClick={() => {
                setOpen(false);
              }}
            >
              완료
            </BottomFixedButton>
          </BottomSheetContainer>
        </BottomSheet>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  z-index: 101;
  background-color: white;
  position: fixed;
  top: 14px;
  right: 21px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.grey700};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomSheetContainer = styled.div`
  width: 100%;
  height: 470px;
  padding: 28px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Discription = styled.p`
  display: inline;
  font-size: 16px;
  font-weight: 400;
  > i {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.main};
  }
`;

const RatingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default FilteringButton;
