import styled from "@emotion/styled";

const Input = ({ placeholder, onChange, value, name }) => {
  return (
    <>
      <InputBox
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </>
  );
};

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
