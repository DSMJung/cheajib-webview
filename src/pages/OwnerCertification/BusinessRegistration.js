import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import ImageBox from "../../components/common/ImageBox";
import NavBar from "../../components/common/NavBar";

const BusinessRegistration = () => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <NavBar
        isBack
        isBlack
        pageTitle={"사장님 인증"}
        onClickBack={() => navigate(-1)}
        headerBox={true}
        position="absolute"
      ></NavBar>
      <div style={{ padding: "20px" }}>
        <Contents>사업자 등록증 or 영업 허가증 확인</Contents>
        <ImageBox
          height={"522px"}
          imageState={image}
          setImageState={setImage}
        />
        <HelperText>*50MB 까지 등록 가능합니다.</HelperText>
        <BottomFixedButton
          isFill
          disable={!image}
          onClick={() => navigate("/map")}
        >
          완료
        </BottomFixedButton>
      </div>
    </>
  );
};

const Contents = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
`;

const HelperText = styled.p`
  font-size: 12px;
  float: right;
  color: ${({ theme }) => theme.system_red};
  margin-top: 8px;
`;

export default BusinessRegistration;
