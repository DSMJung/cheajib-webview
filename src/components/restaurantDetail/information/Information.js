import styled from "@emotion/styled";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Call from "../../../assets/restaurantDetail/information/call.png";
import Info from "../../../assets/restaurantDetail/information/info.png";
import Time from "../../../assets/restaurantDetail/information/time.png";
import { restaurentInfoResource } from "../../../utils/api/resource";
import queryKey from "../../../utils/queryKey";

const Information = () => {
  const { restaurant_id } = useParams();
  const restaurentInfo = queryKey.restaurents.info(restaurant_id);
  const { data: restaurentInfoData } = useQuery(restaurentInfo, () =>
    restaurentInfoResource(restaurant_id)
  );

  console.log(restaurentInfoData);
  useEffect(() => {
    const mapCurrent =
      restaurentInfoData &&
      new window.naver.maps.Map("restaurent_map", {
        center: new window.naver.maps.LatLng(
          restaurentInfoData.latitude,
          restaurentInfoData.longitude
        ),
        zoomControl: false,
        zoom: 17,
        maxZoom: 17,
        minZoom: 17,
        disableDoubleClickZoom: true,
        disableDoubleTapZoom: true,
        mapDataControl: false,
      });
    if (mapCurrent) {
      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          restaurentInfoData.latitude,
          restaurentInfoData.longitude
        ),
        map: mapCurrent,
      });
    }
  }, [restaurentInfoData]);

  //TODO. react-query 로 api를 받아서 정보 변경하기
  return (
    <InformationWrapper>
      <Title>기본 정보</Title>
      <MapBox id="restaurent_map" />
      <MapWrapper>
        <section>
          <Box>
            <img src={Call} style={{ width: "16px" }} />
            <Text>{restaurentInfoData?.phone_number}</Text>
          </Box>
          <Box>
            <img
              src={Time}
              style={{ width: "16px", height: "16px", margin: "4px 0 0" }}
            />
            <TimeBox>{restaurentInfoData?.open_hours}</TimeBox>
          </Box>
        </section>
      </MapWrapper>
      {/* <Box>
        <img
          src={Info}
          style={{ width: "16px", height: "16px", margin: "3px 0 0 0" }}
        />
        <Text style={{ lineHeight: "18px" }}>
          단체석, 포장, 예약, 무선 인터넷, 남/녀 화장실 구분, 국민지원금
        </Text>
      </Box>
      <Title style={{ margin: "36px 0 12px" }}>소개글</Title>
      <Text style={{ lineHeight: "18px", marginBottom: "28px" }}>
        브롱스에서는 소주를 팔지 않습니다. 술 못먹는 술찌들을 위해 씨그램 레몬맛
        탄산수를 준비했습니다. 많이 이용해주세요.
      </Text> */}
    </InformationWrapper>
  );
};

const InformationWrapper = styled.div`
  position: relative;
  margin: 24px 20px 0 20px;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

const MapBox = styled.div`
  flex: 1;
  margin: 20px 0;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: #dedede;
`;

const Box = styled.div`
  display: flex;
  gap: 12px;
`;

const MapWrapper = styled.div`
  display: flex;
  gap: 40px;
  > section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const TimeBox = styled.div`
  height: 64px;
  white-space: pre-line;
  display: flex;
  line-height: 22px;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 16px;
`;

export default Information;
