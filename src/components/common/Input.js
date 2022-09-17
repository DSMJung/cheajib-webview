import styled from "@emotion/styled";

const Input = ({ placeholder, onChange, value, name, label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputBox
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: block;
`;
const Label = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 4px;
`;

const InputBox = styled.input`
  border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.grey500};
  padding: 12px;
  font-size: 16px;
  outline: none;
  width: 100%;
  :focus {
    border-bottom: 1.5px solid ${({ theme }) => theme.main};
  }
  ::placeholder {
    color: ${({ theme }) => theme.grey500};
  }
`;

export default Input;
