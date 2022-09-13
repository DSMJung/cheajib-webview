import styled from "@emotion/styled";
import Call from "../../../assets/restaurantDetail/information/call.png";
import Info from "../../../assets/restaurantDetail/information/info.png";
import Time from "../../../assets/restaurantDetail/information/time.png";

const Information = ({ phone_number, open_time }) => {
  //TODO. props 를 받아서 정보 변경하기
  return (
    <InformationWrapper>
      <MapBox />
      <Title>기본 정보</Title>
      <Box>
        <img src={Call} style={{ width: "16px", marginRight: "12px" }} />
        <Text>010-9312-4329</Text>
      </Box>
      <Box>
        <img
          src={Time}
          style={{ width: "16px", height: "16px", margin: "4px 12px 0 0" }}
        />
        <TimeBox>
          {`평일: 17:30 - 23:20
          토요일: 17:00 - 24:00
          일요일: 17:00 - 24:00`}
        </TimeBox>
      </Box>
      <Box>
        <img
          src={Info}
          style={{ width: "16px", height: "16px", margin: "3px 12px 0 0" }}
        />
        <Text style={{ lineHeight: "18px" }}>
          단체석, 포장, 예약, 무선 인터넷, 남/녀 화장실 구분, 국민지원금
        </Text>
      </Box>
      <Title style={{ margin: "36px 0 12px" }}>소개글</Title>
      <Text style={{ lineHeight: "18px" }}>
        브롱스에서는 소주를 팔지 않습니다. 술 못먹는 술찌들을 위해 씨그램 레몬맛
        탄산수를 준비했습니다. 많이 이용해주세요.
      </Text>
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
  width: 179px;
  height: 100px;
  border-radius: 8px;
  background-color: #dedede;
  position: absolute;
  right: 0;
  margin-top: 36px;
`;

const Box = styled.div`
  display: flex;
  margin-top: 20px;
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