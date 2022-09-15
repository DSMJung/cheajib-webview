import { useState } from "react";
import styled from "@emotion/styled";
import ImageBox from "../../components/common/ImageBox";
import RegistrationCard from "../../assets/ownerCertification/registrationCard.png";
import NavBar from "../../components/common/NavBar";
import BottomFixedButton from "../../components/common/BottomFixedButton";

const RegistrationCardCheck = () => {
  const [image, setImage] = useState("");
  return (
    <>
      <NavBar
        isBack
        isBlack
        pageTitle={"사장님 인증"}
        onClickBack={() => {}}
        headerBox={true}
        position="absolute"
      ></NavBar>
      <div style={{ padding: "20px" }}>
        <Contents style={{ fontSize: "20px", marginBottom: "14px" }}>
          주민등록증 확인
        </Contents>
        <Contents>① 개인정보를 가려주세요.</Contents>
        <Contents>② 화질을 확인해 주세요.</Contents>
        <Contents>③ 정보와 서류가 정확한지 확인해 주세요.</Contents>
        <img
          src={RegistrationCard}
          style={{ width: "100%", marginTop: "28px" }}
        />
        <HelperText>*주민번호 뒷자리와 상세 주소는 꼭 가려주세요.</HelperText>
        <ImageBox
          height={"248px"}
          imageState={image}
          setImageState={setImage}
        />
        <BottomFixedButton isFill disable={!image} onClick={() => {}}>
          다음
        </BottomFixedButton>
      </div>
    </>
  );
};

const Contents = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
`;

const HelperText = styled.p`
  font-size: 12px;
  float: right;
  color: ${({ theme }) => theme.system_red};
  margin: 8px 0 20px;
`;

export default RegistrationCardCheck;
