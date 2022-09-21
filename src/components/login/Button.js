import styled from "@emotion/styled";

const Button = ({ text, img, color, backgroundColor, onClick }) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} onClick={onClick}>
      <img src={img} />
      <Text color={color}>{text}</Text>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  min-height: 54px;
  width: 100%;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
  > img {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 28px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  padding-left: 28px;
  color: ${({ color }) => color};
`;

export default Button;
