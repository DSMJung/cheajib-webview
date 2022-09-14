import styled from "@emotion/styled";
import Pencil from "../../assets/common/Pencil";

const OwnerButton = ({ children, onClick }) => {
  return (
    <OwnerButtonBox onClick={onClick}>
      <Pencil></Pencil>
      <CustomText>{children}</CustomText>
    </OwnerButtonBox>
  );
};

const OwnerButtonBox = styled.div`
  width: 100%;
  min-height: 34px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.main};
  gap: 8px;
`;
const CustomText = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 12px;
`;

export default OwnerButton;
