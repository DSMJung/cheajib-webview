import styled from "@emotion/styled";
import { HashLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return loading ? (
    <SpinnerWrapper>
      <HashLoader loading={loading} color="#009688"></HashLoader>
    </SpinnerWrapper>
  ) : (
    <></>
  );
};

const SpinnerWrapper = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
