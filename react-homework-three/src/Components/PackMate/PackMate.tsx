import "./PackMate.css";
import { useNavigate } from "react-router-dom";
import { GenderButtons } from "../GenderButtons/GenderButtons";

export function PackMate() {
  const navigate = useNavigate();

  return (
    <div className="top-text">
      <p>WELCOME TO PACKMATE 🧳</p>
      <p>ARE YOU:</p>
      <main>
        <GenderButtons
          femaleText="Girl"
          maleText="Boy"
          onFemaleBtnClick={() => navigate("/items-for-girls")}
          onMaleBtnClick={() => navigate("/items-for-boys")}
        />
      </main>
    </div>
  );
}
