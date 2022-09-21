import styled from "@emotion/styled";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ownerCertificationAtom } from "../../atom/ownerCertificationAtom";
import BottomFixedButton from "../../components/common/BottomFixedButton";
import ImageBox from "../../components/common/ImageBox";
import NavBar from "../../components/common/NavBar";
import {
  imageGenerator,
  owenrCertificationGenerator,
} from "../../utils/api/generator";
import queryKey from "../../utils/queryKey";

const BusinessRegistration = () => {
  const navigate = useNavigate();
  const [imageState, setImageState] = useRecoilState(ownerCertificationAtom);
  const { mutate: imageMutate } = useMutation(imageGenerator, {
    onSuccess: (data) =>
      ownerCertificationMutate({
        id_card: data?.image_url_list[0],
        business_card: data?.image_url_list[1],
      }),
    onError: () => alert("오류가 발생하였습니다."),
  });
  const { mutate: ownerCertificationMutate } = useMutation(
    owenrCertificationGenerator,
    {
      onSuccess: () => {
        navigate("/map");
      },
      onError: () => alert("오류가 발생하였습니다."),
    }
  );

  return (
    <>
      <NavBar
        isBack
        isBlack
        pageTitle={"사장님 인증"}
        onClickBack={() => navigate(-1)}
        headerBox={true}
        position="absolute"
      ></NavBar>
      <div style={{ padding: "20px" }}>
        <Contents>사업자 등록증 or 영업 허가증 확인</Contents>
        <ImageBox
          height={"522px"}
          imageState={imageState.businessRegistration}
          setImageState={(data) =>
            setImageState((state) => ({ ...state, businessRegistration: data }))
          }
        />
        <HelperText>*5MB 까지 등록 가능합니다.</HelperText>
        <BottomFixedButton
          isFill
          disable={!imageState.businessRegistration.fileBlob}
          onClick={() =>
            imageMutate([
              imageState.registrationCard.fileBlob,
              imageState.businessRegistration.fileBlob,
            ])
          }
        >
          완료
        </BottomFixedButton>
      </div>
    </>
  );
};

const Contents = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
`;

const HelperText = styled.p`
  font-size: 12px;
  float: right;
  color: ${({ theme }) => theme.system_red};
  margin-top: 8px;
`;

export default BusinessRegistration;
