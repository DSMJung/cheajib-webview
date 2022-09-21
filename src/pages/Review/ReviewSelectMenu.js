import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { menuSelectAtom } from "../../atom/menuSelectAtom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import NavBar from "../../components/common/NavBar";
import SelectMenu from "../../components/review/SelectReviewMenu";
import queryKey from "../../utils/queryKey";

const ReviewSelectMenu = () => {
  const navigate = useNavigate();
  const { restaurant_id } = useParams();
  const menuQueryKey = queryKey.menu.restaurent_id(restaurant_id);
  const { data: menuList } = useQuery(menuQueryKey);
  const setSelectedMenu = useSetRecoilState(menuSelectAtom);

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
        {menuList?.menu_list.map((props) => (
          <SelectMenu
            onCheck={setSelectedMenu}
            key={props.menu_id}
            {...props}
          />
        ))}
      </MenuSelectBoxWrapper>
      <BottomFixedButton
        isFill
        onClick={() => navigate(`/review_write/${restaurant_id}`)}
      >
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
