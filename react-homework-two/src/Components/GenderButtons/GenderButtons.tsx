import "./GenderButtons.css";

interface GenderButtonProp {
  maleText?: string;
  femaleText?: string;
  styleMale?: React.CSSProperties;
  styleFemale?: React.CSSProperties;
  onMaleBtnClick?: () => void;
  onFemaleBtnClick?: () => void;
}

export function GenderButtons({
  maleText,
  femaleText,
  styleMale,
  styleFemale,
  onMaleBtnClick,
  onFemaleBtnClick,
}: GenderButtonProp) {

  
  return (
    <div className="Buttons">
      <button className="Male-Button" style={styleMale} onClick={onMaleBtnClick}>
        {maleText}
      </button>
      <button className="Female-Button" style={styleFemale} onClick={onFemaleBtnClick}>
        {femaleText}
      </button>
    </div>
  );
}
