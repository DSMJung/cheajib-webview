import styled from "@emotion/styled";
import { vegetarianLevelImage } from "../../assets/vegetarianLevel";

const MenuItem = () => {
  return (
    <MenuItemContainer>
      <MenuTextInfoContainer>
        <MenuHeaderContentContainer>
          <img src={vegetarianLevelImage("vegan")}></img>
          <h3>우유 라면</h3>
          <p>80%</p>
          <span>(10+)</span>
        </MenuHeaderContentContainer>
        <DescriptionArea>
          우유의 부드러운 맛과 라면의 매콤한 국물이 어우러진 지구 최강의 음식
        </DescriptionArea>
        <MenuPrice>4000원</MenuPrice>
      </MenuTextInfoContainer>
      <MenuImageBox />
    </MenuItemContainer>
  );
};

const MenuItemContainer = styled.div`
  width: 100%;
  height: 141px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  gap: 20px;
`;

const MenuTextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuHeaderContentContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > img {
    width: 20px;
    height: 20px;
  }
  > h3 {
    color: ${({ theme }) => theme.black};
    font-size: 18px;
    font-weight: 800;
  }
  > p {
    font-size: 12px;
    color: ${({ theme }) => theme.main};
    font-weight: 500;
    align-self: flex-end;
  }
  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.grey500};
    font-weight: 400;
    align-self: flex-end;
  }
`;

const DescriptionArea = styled.div`
  color: ${({ theme }) => theme.grey900};
  font-size: 14px;
  font-weight: 400;
  max-height: 32px;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MenuPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.black};
`;

const MenuImageBox = styled.div`
  min-width: 100px;
  height: 100px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${({ theme }) => theme.grey300};
`;
export default MenuItem;
