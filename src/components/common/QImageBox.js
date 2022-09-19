import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import imagePlus from "../../assets/common/imagePlus.png";
import xIcon from "../../assets/common/XIcon.png";
const QImageBox = ({
  maxImage = 1,
  setImageState,
  imageState = [],
  justifyContent = "flex-start",
}) => {
  const imputRef = useRef(null);
  const imageAdd = (fileBlob) => {
    if (fileBlob) {
      const fileUrl = URL.createObjectURL(fileBlob);
      setImageState((state) => [...state, { fileUrl, fileBlob }]);
    }
  };

  const deleteImage = (src) => {
    setImageState((state) => state.filter((image) => image.fileUrl !== src));
    imputRef.current.value = "";
  };

  return (
    <ImageWrapper justifyContent={justifyContent}>
      {imageState.map((state, idx) => (
        <ImageShowBox
          key={idx}
          src={state.fileUrl}
          onClick={() => deleteImage(state.fileUrl)}
        >
          <div></div>
        </ImageShowBox>
      ))}

      {maxImage !== imageState.length && (
        <ImageAddBox htmlFor="imageFile">
          <div></div>
        </ImageAddBox>
      )}

      <input
        type="file"
        id="imageFile"
        accept="image/*"
        onChange={(e) => imageAdd(e.target.files[0])}
        style={{ display: "none" }}
        ref={imputRef}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: 16px;
`;

const ImageAddBox = styled.label`
  width: 82px;
  height: 82px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 18px;
    height: 18px;
    background-image: url(${imagePlus});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const ImageShowBox = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 4px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  position: relative;
  background-color: ${({ theme }) => theme.grey500};
  > div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-size: 6px;
    background-image: url(${xIcon});
    background-position: center;
    background-repeat: no-repeat;
    right: 4px;
    top: 4px;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default QImageBox;
