import styled from "@emotion/styled";
import ReplyButton from "./ReplyButton";

const Reply = ({ setViewReply }) => {
  return (
    <ReplyContainer>
      <ReplyTextArea
        placeholder={`답글을 적어주세요 
ex.좋은 후기 감사합니다 :)`}
      />
      <ReplyButton
        text={"등록"}
        isFill={true}
        onClick={() => setViewReply(false)}
      />
      <ReplyButton
        text={"취소"}
        isFill={false}
        onClick={() => setViewReply(false)}
      />
    </ReplyContainer>
  );
};

const ReplyTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 20px 16px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.grey300};
  resize: none;
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  ::placeholder {
    color: ${({ theme }) => theme.grey700};
  }
`;

const ReplyContainer = styled.div`
  margin: 0 20px 60px;
`;

export default Reply;
