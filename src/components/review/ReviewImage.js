import styled from "@emotion/styled";

const ReviewImage = ({ imageArray }) => {
  switch (imageArray.length) {
    case 1:
      return <LargeImage src={imageArray[0]} />;
    case 2:
      return (
        <ImageBox style={{ height: "45vw", gridTemplateColumns: "1fr 1fr" }}>
          {imageArray.map((src, idx) => {
            return <Image key={idx} src={src} />;
          })}
        </ImageBox>
      );
    case 3:
      return (
        <ImageBox>
          {imageArray.map((src, idx) => {
            return (
              <Image
                key={idx}
                src={src}
                style={
                  idx === 0 ? { gridColumnStart: 1, gridColumnEnd: 3 } : {}
                }
              />
            );
          })}
        </ImageBox>
      );
    case 4:
      return (
        <ImageBox style={{ gridTemplateColumns: "1fr 1fr" }}>
          {imageArray.map((src, idx) => {
            return <Image key={idx} src={src} />;
          })}
        </ImageBox>
      );
    default:
      return null;
  }
};

const LargeImage = styled.div`
  width: 100%;
  height: 90vw;
  border-radius: 12px;
  margin-bottom: 12px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 90vw;
  display: grid;
  gap: 2px;
  margin-bottom: 12px;
  border-radius: 12px;
  overflow: hidden;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default ReviewImage;
