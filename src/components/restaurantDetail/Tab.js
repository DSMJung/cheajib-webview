import styled from "@emotion/styled";
import { useState } from "react";
import { theme } from "../../styles/theme";
import Information from "./information/Information";
import MenuList from "./MenuList/MenuList";
import ReviewList from "./review/ReviewList";
const Tab = () => {
  const tabtitle = ["메뉴", "정보", "리뷰"];
  const tab = {
    0: <MenuList />,
    1: <Information />,
    2: <ReviewList />,
  };
  const [activetab, setActiveTab] = useState(0);
  const onClickTab = (idx) => {
    setActiveTab(idx);
  };
  return (
    <>
      <TabWrapper>
        {tabtitle.map((title, idx) => {
          return (
            <>
              <TabItem
                key={idx}
                style={
                  activetab === idx
                    ? {
                        color: theme.main,
                        borderColor: theme.main,
                        borderWidth: "2px",
                        height: "44.5px",
                      }
                    : { color: theme.grey500 }
                }
                onClick={() => {
                  onClickTab(idx);
                }}
              >
                {title}
              </TabItem>
            </>
          );
        })}
      </TabWrapper>
      {tab[activetab]}
    </>
  );
};

const TabWrapper = styled.div`
  display: flex;
`;

const TabItem = styled.p`
  flex: 1;
  font-weight: 500;
  text-align: center;
  height: 44px;
  line-height: 44px;
  border-bottom: solid 1px ${({ theme }) => theme.grey500};
`;

export default Tab;
