import styled from "@emotion/styled";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import { DefaultContainer } from "../../components/common/DefaultContainer";
import Input from "../../components/common/Input";
import NavBar from "../../components/common/NavBar";
import QImageBox from "../../components/common/QImageBox";
import VegetarianStage from "../../components/common/VegetarianLevel";
import { imageGenerator, menuGenerator } from "../../utils/api/generator";
import { veganLevelToKorean } from "../../utils/function/veganLevelToKorean";

const AddMenu = () => {
  const navigate = useNavigate();
  const [inputsState, setInputsState] = useState({
    name: "",
    price: "",
    level: "FLEXITARIAN",
    description: "",
  });
  const { restaurant_id } = useParams();
  const [imageState, setImageState] = useState([]);
  const { mutate: menuAddMutate, data: imageData } = useMutation(
    menuGenerator,
    {
      onSuccess: () => {
        alert("메뉴가 성공적으로 추가되었습니다.");
        navigate(`/rastaurant_detail/${restaurant_id}`);
      },
    }
  );

  const { mutate: imageMutate } = useMutation(imageGenerator, {
    onSuccess: () => {
      menuAddMutate({
        description: inputsState.description,
        level: inputsState.level,
        price: inputsState.price,
        menu_image: imageData.data?.image_url_list[0],
        name: inputsState.name,
        restaurent_id: restaurant_id,
      });
    },
    onError: (e) => alert("이미지 업로드에 실패하였습니다."),
  });

  const inputChange = (e) => {
    const { value, name } = e.target;
    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  const submitMenu = () => {
    imageMutate(imageState.map((info) => info.fileBlob));
  };

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
            채식 단계는 <i>{veganLevelToKorean(inputsState.level)}</i>입니다.
          </VeganLevelText>
          <VegetarianStage
            initalState={inputsState.level}
            onChangeLevel={(value) =>
              setInputsState((state) => ({ ...state, level: value }))
            }
          ></VegetarianStage>
        </DefaultWrapper>
        <InputWrapper>
          <Input
            label={"메뉴이름"}
            placeholder="메뉴 이름을 적어주세요."
            value={inputsState.name}
            onChange={inputChange}
            name="name"
          ></Input>
          <Input
            label={"메뉴가격"}
            placeholder="메뉴 가격을 적어주세요."
            value={inputsState.price}
            onChange={inputChange}
            name="price"
          ></Input>
          <Input
            label={"메뉴설명"}
            placeholder="메뉴에 대한 설명을 적어주세요."
            value={inputsState.description}
            onChange={inputChange}
            name="description"
          ></Input>
        </InputWrapper>
        <BottomFixedButton
          isFill
          onClick={submitMenu}
          disable={
            !(
              inputsState.description &&
              inputsState.level &&
              inputsState.price &&
              inputsState.name &&
              restaurant_id &&
              imageState[0]
            )
          }
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
