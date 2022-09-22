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
import AcceptTheTerms from "../../components/owner/AcceptTheTerms";
import Spinner from "../../components/common/Spinner";

const BusinessRegistration = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [imageState, setImageState] = useRecoilState(ownerCertificationAtom);
  const { mutate: imageMutate, isLoading: imageLoding } = useMutation(
    imageGenerator,
    {
      onSuccess: (data) =>
        ownerCertificationMutate({
          id_card: data?.image_url_list[0],
          business_card: data?.image_url_list[1],
        }),
      onError: () => alert("오류가 발생하였습니다."),
    }
  );
  const {
    mutate: ownerCertificationMutate,
    isLoading: ownerCertificationLoding,
  } = useMutation(owenrCertificationGenerator, {
    onSuccess: () => {
      navigate("/map");
    },
    onError: () => alert("오류가 발생하였습니다."),
  });

  return (
    <>
      <Spinner loading={imageLoding || ownerCertificationLoding} />
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
      </div>
      <div style={{ padding: "20px 13px 0 18px" }}>
        <AcceptTheTerms
          isCheck={isChecked}
          content={"개인정보 수집 동의"}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>

      <BottomFixedButton
        isFill
        disable={!(imageState.businessRegistration.fileBlob && isChecked)}
        onClick={() =>
          imageMutate([
            imageState.registrationCard.fileBlob,
            imageState.businessRegistration.fileBlob,
          ])
        }
      >
        완료
      </BottomFixedButton>
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
