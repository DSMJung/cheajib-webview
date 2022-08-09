import styled from "@emotion/styled";
import fullStar from "../../assets/common/fullStar.png";
import halfStar from "../../assets/common/halfStar.png";
import emptyStar from "../../assets/common/emptyStar.png";
import { useEffect, useState } from "react";

const Rating = ({ width, value, readOnly, onChange }) => {
  const [state, setState] = useState(value || 5);

  useEffect(() => {
    setState(value);
  }, [value]);

  const ratingChange = (idx) => {
    console.log(idx);
    onChange?.(idx + 1);
    setState(idx + 1);
  };

  const starSrcReader = (idx) => {
    if (state >= idx + 1) {
      return fullStar;
    } else if (Math.round(state) === idx + 1) {
      return halfStar;
    } else {
      return emptyStar;
    }
  };

  return (
    <RatingContainer width={width}>
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          return (
            <img
              src={starSrcReader(idx) || fullStar}
              key={idx}
              onClick={() => !readOnly && ratingChange(idx)}
              alt="star"
            />
          );
        })}
    </RatingContainer>
  );
};

const RatingContainer = styled.div`
  width: ${({ width }) => width};
  display: flex;
  justify-content: space-between;
  > img {
    width: calc(${({ width }) => width} / 6);
    height: auto;
  }
`;

export default Rating;
