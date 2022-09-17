import styled from "@emotion/styled";
import { DefaultContainer } from "../../common/DefaultContainer";
import OwnerButton from "../../owner/OwnerButton";
import IconButton from "../IconButton";
import MenuItem from "../MenuItem";
import plus from "../../../assets/restaurantDetail/buttonIcon/plus.png";
import { useNavigate } from "react-router-dom";
const MenuList = () => {
  const navigate = useNavigate();
  return (
    <>
      <ButtonContainer>
        <OwnerButton>메뉴 관리하기</OwnerButton>
      </ButtonContainer>
      <IconButton
        icon={plus}
        onClick={() => navigate("/add_menu")}
      ></IconButton>
      <MenuListContainer>
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"vegan"}
        />
      </MenuListContainer>
    </>
  );
};

const MenuListContainer = styled.div`
  > * + * {
    border-top: 1px solid ${({ theme }) => theme.grey500};
  }
`;

const ButtonContainer = styled.div`
  padding: 20px 20px 0px;
`;

export default MenuList;
