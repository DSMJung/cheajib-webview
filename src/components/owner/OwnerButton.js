import styled from "@emotion/styled";
import Pencil from "../../assets/common/Pencil";

const OwnerButton = ({ children, onClick, isFill }) => {
  return (
    <OwnerButtonBox onClick={onClick} isFill={isFill}>
      <Pencil isWhite={isFill}></Pencil>
      <CustomText isFill={isFill}>{children}</CustomText>
    </OwnerButtonBox>
  );
};

const OwnerButtonBox = styled.div`
  width: 100%;
  min-height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isFill }) =>
    isFill ? theme.main : theme.white};
  border: 1px solid ${({ theme }) => theme.main};
  gap: 8px;
`;

const CustomText = styled.p`
  color: ${({ theme, isFill }) => (isFill ? theme.white : theme.main)};
  font-size: 14px;
`;

export default OwnerButton;
