import styled from "@emotion/styled";
import DefaultButton from "./DefaultButton";

const BottomFixedButton = ({
  disable = false,
  onClick,
  children,
  isFill = false,
}) => {
  return (
    <>
      <FullSizeButtonWrapper>
        <DefaultButton disable={disable} onClick={onClick} isFill={isFill}>
          {children}
        </DefaultButton>
      </FullSizeButtonWrapper>
      <BackgroundBox />
    </>
  );
};

const FullSizeButtonWrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 20px 16px;
  z-index: 101;
`;

const BackgroundBox = styled.div`
  width: 100%;
  height: 48px;
`;

export default BottomFixedButton;
