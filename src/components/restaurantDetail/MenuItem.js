import styled from "@emotion/styled";
import { vegetarianLevelImage } from "../../assets/vegetarianLevel";

const MenuItem = ({
  menuName,
  reliability,
  participants,
  description,
  price,
  vegetarianLevel,
  menuImage,
}) => {
  return (
    <MenuItemContainer>
      <MenuTextInfoContainer>
        <MenuHeaderContentContainer>
          <img src={vegetarianLevelImage(vegetarianLevel)}></img>
          <h3>{menuName}</h3>
          <p>{reliability}</p>
          <span>{`(${participants})`}</span>
        </MenuHeaderContentContainer>
        <DescriptionArea>{description}</DescriptionArea>
        <MenuPrice>{price}원</MenuPrice>
      </MenuTextInfoContainer>
      <MenuImageBox src={menuImage} />
    </MenuItemContainer>
  );
};

const MenuItemContainer = styled.div`
  width: 100%;
  height: 128px;
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
  border-radius: 8px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.grey300};
`;

export default MenuItem;
