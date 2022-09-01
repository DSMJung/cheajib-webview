import styled from "@emotion/styled";
import CertificationBadge from "../../assets/common/certificationBadge.png";

const RestaurantTitle = () => {
  return (
    <RestaurantTitleWrapper>
      <TitleBox>
        <Title>브롱스</Title>
        <img src={CertificationBadge} />
      </TitleBox>
      <Address>서교동 346-39번지 하동 1층 마포구 서울특별시 KR</Address>
    </RestaurantTitleWrapper>
  );
};

const RestaurantTitleWrapper = styled.div`
  margin: 24px 20px 16px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

const TitleBox = styled.div`
  display: flex;
  > img {
    width: 24px;
    height: 24px;
    margin: 2px 0 0 5px;
  }
`;

const Address = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
`;

export default RestaurantTitle;
