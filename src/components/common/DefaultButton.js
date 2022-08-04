import styled from "@emotion/styled";

const DefaultButton = ({
  disable = false,
  onClick,
  children,
  isFill = false,
}) => {
  return (
    <ButtonContainer
      disable={disable}
      onClick={disable ? () => {} : onClick}
      isFill={isFill}
    >
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  background-color: ${({ theme, isFill }) =>
    isFill ? theme.main : theme.white};
  border: 1px solid ${({ theme }) => theme.main};
  width: 100%;
  height: 49px;
  padding: 0 20px;
  align-items: center;
  border-radius: 8px;
  opacity: ${({ disable }) => (disable ? 0.5 : 1)};
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme, isFill }) => (isFill ? theme.white : theme.main)};
  :active {
    opacity: 0.5;
  }
`;

export default DefaultButton;
