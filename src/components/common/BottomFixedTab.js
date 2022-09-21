import styled from "@emotion/styled";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ListIcon from "../../assets/common/ListIcon";
import MapIcon from "../../assets/common/MapIcon";
import ProfileIcon from "../../assets/common/ProfileIcon";

const BottomFixedTab = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <TabContainer>
        <ListIcon
          onClick={() => {
            navigate("/restaurant_list");
          }}
          isActive={
            "/restaurant_list" === pathname ||
            pathname.startsWith("/restaurant_detail")
          }
        ></ListIcon>
        <MapIcon
          onClick={() => {
            navigate("/map");
          }}
          isActive={"/map" === pathname}
        ></MapIcon>
        <ProfileIcon
          onClick={() => {
            navigate("/my_page");
          }}
          isActive={"/my_page" === pathname}
        ></ProfileIcon>
      </TabContainer>
      <TabAreaBox></TabAreaBox>
    </>
  );
};

const TabContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  z-index: 101 !important;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.white};
`;

const TabAreaBox = styled.div`
  width: 100%;
  min-height: 49px;
`;

export default BottomFixedTab;
