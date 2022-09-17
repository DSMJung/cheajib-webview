import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import { DefaultContainer } from "../../components/common/DefaultContainer";
import Input from "../../components/common/Input";
import NavBar from "../../components/common/NavBar";
import QImageBox from "../../components/common/QImageBox";
import VegetarianStage from "../../components/common/VegetarianLevel";

const AddMenu = () => {
  const navigate = useNavigate();
  const [imageState, setImageState] = useState([]);
  return (
    <>
      <NavBar
        isBack
        isBlack
        onClickBack={() => navigate(-1)}
        pageTitle={"메뉴추가"}
        headerBox={false}
      ></NavBar>
      <DefaultContainer
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <DefaultWrapper>
          <LeadText>사진 등록</LeadText>
          <QImageBox
            maxImage={1}
            imageState={imageState}
            setImageState={setImageState}
          ></QImageBox>
        </DefaultWrapper>
        <DefaultWrapper>
          <VeganLevelText>
            채식 단계는 <i>폴로</i>입니다.
          </VeganLevelText>
          <VegetarianStage></VegetarianStage>
        </DefaultWrapper>
        <InputWrapper>
          <Input
            label={"메뉴이름"}
            placeholder="메뉴 이름을 적어주세요."
          ></Input>
          <Input
            label={"메뉴가격"}
            placeholder="메뉴 가격을 적어주세요."
          ></Input>
          <Input
            label={"메뉴설명"}
            placeholder="메뉴에 대한 설명을 적어주세요."
          ></Input>
        </InputWrapper>
        <BottomFixedButton
          isFill
          onClick={() => navigate("/rastaurant_detail/1")}
        >
          등록
        </BottomFixedButton>
      </DefaultContainer>
    </>
  );
};

const LeadText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const VeganLevelText = styled.span`
  font-size: 16px;
  font-weight: 400;
  display: inline;
  > i {
    color: ${({ theme }) => theme.main};
    font-size: 16px;
    font-weight: 400;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default AddMenu;
