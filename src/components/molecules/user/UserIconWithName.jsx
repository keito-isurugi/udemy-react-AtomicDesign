import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { user } = props;
  const { image, name } = user;
  // console.log(user)
  return (
    <Scontainer>
      <SImage height={160} width={160} src={image} alt="dog" />
      <SName>{name}</SName>
      {/* <SEdit>編集</SEdit> */}
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
