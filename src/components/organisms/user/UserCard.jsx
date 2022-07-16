import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  console.log(user);
  return (
    <SCard>
      <UserIconWithName user={user} />
      <SDl>
        <dt>Mail</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.web}</dd>
      </SDl>
    </SCard>
  );
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow: break-word;
  }
`;
