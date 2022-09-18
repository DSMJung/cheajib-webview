import styled from "@emotion/styled";
import Background from "../../assets/login/background.png";
import Logo from "../../assets/login/logo.png";
import Button from "../../components/login/Button";
import Google from "../../assets/login/google.png";
import Naver from "../../assets/login/naver.png";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { loginGenerator } from "../../utils/api/generator";

const Login = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(loginGenerator, {
    onSuccess: () => navigate("/map"),
  });
  return (
    <LoginWrapper>
      <TextWrapper>
        <SubTitle>
          새로운&nbsp;<SubTitleHighlight>비거니즘</SubTitleHighlight>의 시작,
        </SubTitle>
        <Title>채집</Title>
        <img src={Logo} style={{}} />
      </TextWrapper>
      <ButtonWrapper>
        <Button
          text="구글로 로그인"
          backgroundColor={"#FFFFFF"}
          color={"#8D8D8D"}
          onClick={() => navigate("/map")}
          img={Google}
        />
        <Button
          text="네이버로 로그인"
          backgroundColor={"#2CB400"}
          color={"#FFFFFF"}
          onClick={() => mutate()}
          img={Naver}
        />
      </ButtonWrapper>
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
  background-size: cover;
  background-repeat: no-repeat;
  padding: 180px 20px 100px;
  justify-content: space-between;
  background-position: center;
`;

const Title = styled.p`
  font-size: 38px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;

const SubTitle = styled.p`
  margin-bottom: 16px;
  font-size: 24px;
  display: flex;
  color: ${({ theme }) => theme.white};
`;

const SubTitleHighlight = styled.p`
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 52px;
    margin-top: 80px;
  }
`;

export default Login;
