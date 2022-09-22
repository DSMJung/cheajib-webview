import styled from "@emotion/styled";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuSelectAtom } from "../../atom/menuSelectAtom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import { DefaultContainer } from "../../components/common/DefaultContainer";
import NavBar from "../../components/common/NavBar";
import QImageBox from "../../components/common/QImageBox";
import Rating from "../../components/common/Rating";
import VegetarianStage from "../../components/common/VegetarianLevel";
import { imageGenerator, reviewGenerator } from "../../utils/api/generator";
import { veganLevelToKorean } from "../../utils/function/veganLevelToKorean";
import queryKey from "../../utils/queryKey";
import Spinner from "../../components/common/Spinner";
const ReviewWrite = () => {
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(5);
  const [menuList, setMenuList] = useRecoilState(menuSelectAtom);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { restaurant_id } = useParams();

  const { mutate: imageMutate, isLoading: imageLoading } = useMutation(
    imageGenerator,
    {
      onSuccess: (data) => {
        reviewMutate({
          restaurant_id: restaurant_id,
          content: content,
          image_url: data.image_url_list,
          menu_list: menuList,
          review_point: rating,
        });
      },
    }
  );

  const { mutate: reviewMutate, isLoading: reviewLoading } = useMutation(
    reviewGenerator,
    {
      onSuccess: () => {
        alert("리뷰 등록이 완료되었습니다.");
        navigate(`/restaurant_detail/${restaurant_id}`, { replace: true });
      },
      onError: (e) => alert(e),
    }
  );

  const onDeleteVeganLevel = (id) => {
    setMenuList((state) => state.filter((info) => info.menu_id !== id));
  };

  const submitReview = () => {
    const imagesBlob = images.map((files) => files.fileBlob);
    imageMutate(imagesBlob);
  };

  const onChangeLevel = (menu_id, level, name) => {
    const changeArray = menuList.map((info) =>
      info.menu_id === menu_id ? { menu_id, level, name } : info
    );

    setMenuList(changeArray);
  };

  const restaurantDetailKey = queryKey.restaurents.detail(restaurant_id);
  const { data: restaurantDetailData } = useQuery(restaurantDetailKey);
  console.log(menuList);
  return (
    <>
      <Spinner loading={imageLoading || reviewLoading} />
      <DefaultContainer>
        <NavBar
          isBack
          isBlack
          pageTitle={restaurantDetailData?.restaurant_name}
          position="fixed"
          headerBox
          onClickBack={() => navigate(-1)}
        ></NavBar>
        <RactingWrapper>
          <Rating width={"187px"} value={rating} onChange={setRating}></Rating>
        </RactingWrapper>
        <LeadText>리뷰를 작성해주세요</LeadText>
        <QImageBox
          setImageState={setImages}
          imageState={images}
          justifyContent="center"
          maxImage={4}
        />
        <InputsWrapper>
          <ReviewTextArea
            placeholder="음식에 대한 솔직한 리뷰를 남겨주세요"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></ReviewTextArea>

          {menuList.map(({ menu_id, level, name }) => (
            <SelectVeganLevelWrapper key={menu_id}>
              <VeganLevelSelectHeader>
                <VegetarianText>
                  {name}의 채식 단계는 <i>{veganLevelToKorean(level)}</i>
                  입니다.
                </VegetarianText>
                <span onClick={() => onDeleteVeganLevel(menu_id)}>
                  선택안함
                </span>
              </VeganLevelSelectHeader>
              <VegetarianStage
                initalState={level}
                onChangeLevel={(changeLevel) => {
                  onChangeLevel(menu_id, changeLevel, name);
                }}
              ></VegetarianStage>
            </SelectVeganLevelWrapper>
          ))}
        </InputsWrapper>

        <BottomFixedButton
          isFill
          onClick={() => submitReview()}
          // onClick={() => navigate("/restaurant_detail/1")}
        >
          완료
        </BottomFixedButton>
      </DefaultContainer>
    </>
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
