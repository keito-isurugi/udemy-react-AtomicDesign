import "./styles.css";
import { Router } from "./router/Router";

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
      <Router />
    </div>
  );
}
