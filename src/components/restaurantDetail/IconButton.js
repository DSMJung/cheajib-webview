import styled from "@emotion/styled";

const IconButton = ({ icon, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} src={icon}>
      <div></div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 20px;
  z-index: 5;
  bottom: 78px;
  > div {
    width: 20px;
    height: 20px;
    background-image: ${({ src }) => `url( ${src})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default IconButton;
