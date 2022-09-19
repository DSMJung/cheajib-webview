import styled from "@emotion/styled";
import Image from "../../assets/common/image.png";

const ImageBox = ({ height, imageState, setImageState }) => {
  const imageAdd = (fileBlob) => {
    const fileUrl = URL.createObjectURL(fileBlob);
    setImageState({ fileUrl, fileBlob });
  };
  return (
    <>
      <ImageWrapper height={height} htmlFor="imageInput">
        {imageState.fileUrl ? (
          <img
            src={imageState.fileUrl}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          <img src={Image} style={{ width: "60px" }} />
        )}
      </ImageWrapper>
      <input
        type={"file"}
        id="imageInput"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          imageAdd(e.target.files[0]);
        }}
      ></input>
    </>
  );
};

const ImageWrapper = styled.label`
  width: 100%;
  overflow: hidden;
  height: ${({ height }) => height};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey500};
`;

export default ImageBox;
