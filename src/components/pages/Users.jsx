import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((index) => {
  return {
    id: index,
    image: "https://source.unsplash.com/yUu4hy7nw5c",
    name: `keito${index}`,
    email: "email@email.com",
    phone: "111-11111-1111",
    company: {
      name: "㈱ほげほげ"
    },
    web: "google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
