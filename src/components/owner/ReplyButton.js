import styled from "@emotion/styled";

const ReplyButton = ({ text, isFill, onClick }) => {
  return (
    <ButtonWrapper isFill={isFill} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  color: ${({ theme, isFill }) => (isFill ? theme.main : theme.grey700)};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid
    ${({ theme, isFill }) => (isFill ? theme.main : theme.grey700)};
  border-radius: 8px;
  width: 52px;
  height: 32px;
  float: right;
  margin: 8px 0 0 8px;
`;

export default ReplyButton;
