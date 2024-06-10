import "./Button.css"

interface ButtonProp {
   text: string;
   style?: React.CSSProperties;
   onBtnClick: () => void;
}

export function Button({text, style , onBtnClick}: ButtonProp) {
    return (
        <button className="Button" style={style} onClick={onBtnClick}>{text}</button>
    );
}
//button-ot stoi for future use