import "../style/Inscription.css";
import Identification from "./Identification";
import Inscription from "./Inscription";

export default function LoginPage() {
  return (
    <div>
      <div className="style.loging-page">
        <Identification />
        <Inscription />
      </div>
    </div>
  );
}
