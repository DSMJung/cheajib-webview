import styled from "@emotion/styled";

const Profile = ({ name, email }) => {
  return (
    <ProfileWrapper>
      <UserName>{name}</UserName>
      <UserEmail>{email}</UserEmail>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.main};
  width: 100%;
  height: 230px;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const UserName = styled.p`
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.white};
`;

const UserEmail = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: 400;
  margin-top: 12px;
`;

export default Profile;
