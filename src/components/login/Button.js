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
  height: 54px;
  width: 340px;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  > img {
    width: 24px;
    height: 24px;
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
