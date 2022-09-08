import styled from "@emotion/styled";
import Background from "../../assets/login/background.png";
import Logo from "../../assets/login/logo.png";
import Button from "../../components/login/Button";
import Google from "../../assets/login/google.png";
import Naver from "../../assets/login/naver.png";

const Login = () => {
  return (
    <LoginWrapper>
      <SubTitle>
        새로운&nbsp;<SubTitleHighlight>비거니즘</SubTitleHighlight>의 시작,
      </SubTitle>
      <Title>채집</Title>
      <img src={Logo} style={{ marginBottom: "250px" }} />
      <Button
        text="구글로 로그인"
        backgroundColor={"#FFFFFF"}
        color={"#8D8D8D"}
        img={Google}
      />
      <Button
        text="네이버로 로그인"
        backgroundColor={"#2CB400"}
        color={"#FFFFFF"}
        img={Naver}
      />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-image: url(${Background});
  background-size: contain;
  background-position: center;
  > img {
    width: 52px;
    margin-top: 80px;
  }
`;

const Title = styled.p`
  font-size: 38px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;

const SubTitle = styled.p`
  margin: 178px 0 16px;
  font-size: 24px;
  display: flex;
  color: ${({ theme }) => theme.white};
`;

const SubTitleHighlight = styled.p`
  font-weight: 500;
`;

export default Login;
