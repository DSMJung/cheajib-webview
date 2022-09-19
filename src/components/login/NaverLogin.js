// import { useEffect } from "react";

// const NaverLogin = () => {
//   const { naver } = window;

//   useEffect(() => {
//     initializeNaverLogin(); // useEffect로 안하고 onclick하면 로그인배너아이콘 안뜸
//   }, []);
//   const naverLogin = new naver.LoginWithNaverId({
//     clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
//     callbackUrl: process.env.REACT_APP_REDIRECT_URI,
//     isPopup: false /* 팝업을 통한 연동처리 여부, true 면 팝업 */,
//     loginButton: {
//       color: "green",
//       type: 1,
//       height: 47,
//     } /* 로그인 버튼의 타입을 지정 */,
//   });

//   naverLogin.init();
// };

// export default NaverLogin;
