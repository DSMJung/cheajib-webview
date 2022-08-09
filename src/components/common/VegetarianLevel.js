import styled from "@emotion/styled";
import { vegetarianLevelImage } from "../../assets/vegetarianLevel";
import { useState } from "react";

const levelNum = {
  vegan: 0,
  lacto: 1,
  lactoOvo: 2,
  pasco: 3,
  pollo: 4,
  flexitarian: 5,
};

const VegetarianStage = ({ initalState, onChangeLevel }) => {
  const [level, setLevel] = useState(initalState && "flexitarian");
  return (
    <StageContainer>
      {Object.keys(levelNum).map((x, i) => (
        <VegetarianItem
          key={i}
          level={x}
          currentLevel={level}
          setCurrentLevel={setLevel}
          onChangeLevel={onChangeLevel}
        />
      ))}
    </StageContainer>
  );
};

const VegetarianItem = ({
  level,
  currentLevel,
  setCurrentLevel,
  onChangeLevel,
}) => {
  return (
    <VegetarianItemImage
      onClick={() => {
        onChangeLevel?.(level);
        setCurrentLevel(level);
      }}
      src={
        levelNum[currentLevel] >= levelNum[level]
          ? vegetarianLevelImage(level)
          : vegetarianLevelImage(
              `shadow${level.charAt(0).toUpperCase() + level.slice(1)}`
            )
      }
    />
  );
};

const StageContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const VegetarianItemImage = styled.img`
  width: 40px;
  height: 40px;
`;

export default VegetarianStage;
