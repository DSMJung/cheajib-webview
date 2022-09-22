import styled from "@emotion/styled";
import certificationBadge from "../../assets/common/certificationBadge.png";
import star from "../../assets/common/fullStar.png";

const RestaurantItem = ({
  restaurantName,
  address,
  rating,
  recommendMenu,
  isCertification,
  restaurantImage,
  onClick,
}) => {
  return (
    <ItemContainer onClick={onClick}>
      <RestaurantImage src={restaurantImage} />
      <ItemInfoContainer>
        <RestaurantName>
          {restaurantName}
          {isCertification && <img src={certificationBadge} />}
        </RestaurantName>
        <AddressText>{address}</AddressText>
        <EtcInfoContainer>
          <RactingState>
            <img src={star} />
            <p>{rating}</p>
          </RactingState>
          <RecommendedMenu>{recommendMenu}</RecommendedMenu>
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
  background-color: ${({ theme }) => theme.grey500};
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
  /* margin-bottom: 3px; */
`;

const AddressText = styled.div`
  height: 36px;
  color: ${({ theme }) => theme.grey900};
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const EtcInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 3px;
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
