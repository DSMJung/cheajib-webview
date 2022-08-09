import styled from "@emotion/styled";

const ReviewAnswer = () => {
  return (
    <AnswerWrapper>
      <div style={{ display: "flex" }}>
        <OwnerName>사장님</OwnerName>
        <Date>오늘</Date>
      </div>
      <AnswerContent>
        김의찬님, 저희 파스타를 맛있게 드셔주셔서 감사합니다^^ 앞으로도 더
        맛있는 파스타를 만들기 위해 노력하겠습니다
      </AnswerContent>
    </AnswerWrapper>
  );
};

const AnswerWrapper = styled.div`
  background-color: ${({ theme }) => theme.grey300};
  border-radius: 8px;
  margin: 0 20px 24px;
  padding: 16px;
`;

const OwnerName = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
`;

const Date = styled.p`
  font-size: 12px;
  margin: 4px 0 0 8px;
  color: ${({ theme }) => theme.grey700};
`;

const AnswerContent = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.grey900};
  margin-top: 8px;
`;

export default ReviewAnswer;
