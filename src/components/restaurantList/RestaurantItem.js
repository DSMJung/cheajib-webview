import styled from "@emotion/styled";
import certificationBadge from "../../assets/common/certificationBadge.png";
import star from "../../assets/common/fullStar.png";
import brongs from "../../assets/test/brongs.png";

const RestaurantItem = () => {
  return (
    <ItemContainer>
      <RestaurantImage src={brongs} />
      <ItemInfoContainer>
        <RestaurantName>
          브롱스
          <img src={certificationBadge} />
        </RestaurantName>
        <AddressText>
          서교동 346-39번지 하동 1층 마포구 서울특별시KR
        </AddressText>
        <EtcInfoContainer>
          <RactingState>
            <img src={star} />
            <p>4.9</p>
          </RactingState>
          <RecommendedMenu>우유 빵, 우유 라면</RecommendedMenu>
        </EtcInfoContainer>
      </ItemInfoContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  min-height: 113px;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0 20px;
`;

const RestaurantImage = styled.div`
  min-width: 82px;
  height: 82px;
  border-radius: 4px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestaurantName = styled.div`
  display: flex;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;
  > img {
    width: 22px;
    height: 22px;
  }
  margin-bottom: 3px;
`;

const AddressText = styled.div`
  height: 36px;
  color: ${({ theme }) => theme.grey900};
  font-size: 14px;
  font-weight: 400;
`;

const EtcInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RactingState = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > img {
    width: 18px;
    height: 18px;
  }
  > p {
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-weight: 400;
  }
`;

const RecommendedMenu = styled.div`
  color: ${({ theme }) => theme.grey700};
  font-size: 14px;
  font-weight: 400;
`;

export default RestaurantItem;
