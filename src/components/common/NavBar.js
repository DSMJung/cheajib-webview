import styled from "@emotion/styled";
import Arrow from "../../assets/common/Arrow";
const NavBar = ({
  isBack,
  pageTitle,
  onClickBack,
  isBlack,
  headerColor = "transparent",
  position = "relative",
  headerBox = true,
}) => {
  return (
    <>
      <NavBarContainer position={position} headerColor={headerColor}>
        {isBack && (
          <Arrow
            isBlack={isBlack}
            onClick={onClickBack}
            style={{
              position: "absolute",
              bottom: "18px",
              left: "11px",
              zIndex: 120,
            }}
          />
        )}
        <PageTitleContainer>{pageTitle}</PageTitleContainer>
      </NavBarContainer>
      {headerBox && <NavBarBox></NavBarBox>}
    </>
  );
};

const NavBarContainer = styled.div`
  width: 100%;
  height: 61px;
  background-color: ${({ headerColor }) => headerColor};
  position: ${({ position }) => position};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const BackIcon = styled(Arrow)`
  position: absolute;
  left: 11px;
  bottom: 18px;
`;

const PageTitleContainer = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;
const NavBarBox = styled.div`
  width: 100%;
  height: 61px;
`;

export default NavBar;
