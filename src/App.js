import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>検索</PrimaryButton>
      <PrimaryButton>送信</PrimaryButton>
    </div>
  );
}
