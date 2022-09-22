import styled from "@emotion/styled";
import { DefaultContainer } from "../../common/DefaultContainer";
import OwnerButton from "../../owner/OwnerButton";
import IconButton from "../IconButton";
import MenuItem from "../MenuItem";
import plus from "../../../assets/restaurantDetail/buttonIcon/plus.png";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import queryKey from "../../../utils/queryKey";
import { menuListResource } from "../../../utils/api/resource";
import { useEffect } from "react";
const MenuList = () => {
  const navigate = useNavigate();
  const { restaurant_id } = useParams();
  const menuKey = queryKey.menu.restaurent_id(restaurant_id);
  const { data: menuListData } = useQuery(menuKey, () =>
    menuListResource(restaurant_id)
  );
  return (
    <>
      <ButtonContainer>
        <OwnerButton>메뉴 관리하기</OwnerButton>
      </ButtonContainer>
      <IconButton
        icon={plus}
        onClick={() => navigate(`/add_menu/${restaurant_id}`)}
      ></IconButton>

      <MenuListContainer>
        {menuListData?.menu_list.map(
          ({
            description,
            name,
            menu_id,
            price,
            menu_image_url,
            average,
            menu_count,
            level,
          }) => (
            <MenuItem
              description={description}
              menuImage={menu_image_url}
              vegetarianLevel={level}
              menuName={name}
              key={menu_id}
              price={price}
              participants={menu_count}
              reliability={average}
            />
          )
        )}

        {/* <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
        />
        <MenuItem
          discription={
            "우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식"
          }
          menuName={"우유 라면"}
          participants={10}
          price={4000}
          reliability={80}
          vegetarianLevel={"VEGAN"}
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
        /> */}
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
