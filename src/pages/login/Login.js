import styled from "@emotion/styled";
import Background from "../../assets/login/background.png";
import Logo from "../../assets/login/logo.png";
import Button from "../../components/login/Button";
import Google from "../../assets/login/google.png";
import Naver from "../../assets/login/naver.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginGenerator } from "../../utils/api/generator";
import { useEffect } from "react";
import getParamsMap from "../../utils/function/getParamsMap";
import Spinner from "../../components/common/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const queryString = window.location.search;

  useEffect(() => {
    if (accessToken) navigate("/map");
  }, [accessToken, navigate]);

  const { mutate: loginMutate, isLoading } = useMutation(loginGenerator, {
    onSuccess: (data) => {
      localStorage.setItem("access_token", data?.access_token);
      navigate("/map");
    },
  });

  useEffect(() => {
    const params = getParamsMap(queryString);
    params?.code && loginMutate(params.code);
  }, [loginMutate, queryString]);

  // const initializeNaverLogin = () => {
  //   const naverLogin = new window.naver.LoginWithNaverId({
  //     clientId: "wl9JLG_UF_57OZZgjkms",
  //     callbackUrl: "http://localhost:3000/",
  //     isPopup: false,
  //     loginButton: { color: "white", type: 1, height: "47" },
  //   });
  //   naverLogin.init();
  // };

  // useEffect(() => {
  //   initializeNaverLogin();
  // }, []);

  return (
    <>
      <Spinner loading={isLoading} />
      <LoginWrapper>
        <TextWrapper>
          <SubTitle>
            새로운&nbsp;<SubTitleHighlight>비거니즘</SubTitleHighlight>의 시작,
          </SubTitle>
          <Title>채집</Title>
          <img src={Logo} />
        </TextWrapper>
        <ButtonWrapper>
          <Button
            text="네이버로 로그인"
            backgroundColor={"#2CB400"}
            color={"#FFFFFF"}
            onClick={() =>
              (window.location.href =
                "https://nid.naver.com/oauth2.0/authorize?client_id=wl9JLG_UF_57OZZgjkms&response_type=code&redirect_uri=http://localhost:3000/&state=STATE_STRING")
            }
            img={Naver}
          />
          <div id="naverIdLogin"></div>
        </ButtonWrapper>
      </LoginWrapper>
    </>
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

const SubTitle = styled.span`
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
