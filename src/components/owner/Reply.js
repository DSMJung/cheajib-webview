import styled from "@emotion/styled";
import { useMutation } from "react-query";
import { replyGenerator } from "../../utils/api/generator";
import ReplyButton from "./ReplyButton";

const Reply = ({
  setReplyComment,
  review_id,
  replyComment,
  reviewListRefetch,
}) => {
  const { mutate: replyMutate } = useMutation(replyGenerator, {
    onSuccess: () => {
      onClickButton();
      reviewListRefetch();
    },
    onError: () => alert("답글을 등록할 수 없습니다."),
  });

  const onClickButton = () => {
    setReplyComment((state) => {
      let replyState = state;
      delete replyState[review_id];
      return replyState;
    });
  };

  const onClickSubmitButton = () => {
    replyMutate(review_id, replyComment[review_id]);
  };

  const changeText = (e) => {
    setReplyComment((state) => ({ ...state, [review_id]: e.target.value }));
  };

  return (
    <ReplyContainer>
      <ReplyTextArea
        placeholder={`답글을 적어주세요 
ex.좋은 후기 감사합니다 :)`}
        onChange={changeText}
        value={replyComment[review_id]}
      />
      <ReplyButton text={"등록"} isFill={true} onClick={onClickSubmitButton} />
      <ReplyButton text={"취소"} isFill={false} onClick={onClickButton} />
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
