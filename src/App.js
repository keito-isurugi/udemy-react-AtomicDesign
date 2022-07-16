import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "keito",
  image: "https://source.unsplash.com/2l0CWTpcChI",
  email: "test@email.com",
  phone: "000-000-0000",
  company: {
    name: "hogehoge"
  },
  web: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>削除</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
