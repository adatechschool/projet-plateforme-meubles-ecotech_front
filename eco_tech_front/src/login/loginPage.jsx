import "../style/Inscription.css";
import Identification from "./Identification";
import Inscription from "./Inscription";

export default function LoginPage() {
  return (
    <div>
      <div className="logingPage">
        <Identification />
        <Inscription />
      </div>
    </div>
  );
}
