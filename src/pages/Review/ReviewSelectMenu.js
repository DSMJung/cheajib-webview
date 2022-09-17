import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import { DefaultContainer } from "../../components/common/DefaultContainer";
import NavBar from "../../components/common/NavBar";
import SelectMenu from "../../components/review/SelectReviewMenu";

const ReviewSelectMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar
        isBack
        isBlack
        pageTitle={"브롱스"}
        headerBox={false}
        onClickBack={() => navigate(-1)}
      />

      <MenuSelectBoxWrapper>
        <SelectMenu></SelectMenu>
        <SelectMenu></SelectMenu>
        <SelectMenu></SelectMenu>
        <SelectMenu></SelectMenu>
        <SelectMenu></SelectMenu>
        <SelectMenu></SelectMenu>
        <SelectMenu></SelectMenu>
        <SelectMenu></SelectMenu>
      </MenuSelectBoxWrapper>
      <BottomFixedButton isFill onClick={() => navigate("/review_write")}>
        다음
      </BottomFixedButton>
    </>
  );
};

const MenuSelectBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > * + * {
    border-top: 1px solid ${({ theme }) => theme.grey500};
  }
`;
export default ReviewSelectMenu;
