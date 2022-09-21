import styled from "@emotion/styled";
import CheckBox from "../common/CheckBox";
import Arrow from "../../assets/mypage/arrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AcceptTheTerms = ({ content, onClick, isCheck }) => {
  const navigate = useNavigate();
  return (
    <AcceptTheTermsWrapper>
      <CheckBox isChecked={isCheck} onClick={onClick} />
      <Content>{content}</Content>
      <ViewTerms onClick={() => navigate("/terms_of_service")}>
        <ViewTermsText>약관보기</ViewTermsText>
        <img src={Arrow} />
      </ViewTerms>
    </AcceptTheTermsWrapper>
  );
};

const AcceptTheTermsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const Content = styled.p`
  margin: 0 0 1px 8px;
`;

const ViewTerms = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  right: 0;
  > img {
    width: 24px;
  }
`;

const ViewTermsText = styled.p`
  font-weight: 500;
  margin-bottom: 1px;
`;

export default AcceptTheTerms;
