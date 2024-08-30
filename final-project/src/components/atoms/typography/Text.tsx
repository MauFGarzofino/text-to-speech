import "./styles/Text.css";

interface TextProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string; 
}

const TextAtom = ({ text, fontSize = "1.125rem", fontWeight = "bold", color = "#ffffff", style, className }: TextProps) => {
  return (
    <h1 className={`text-atom ${className}`} style={{ fontSize, fontWeight, color, ...style }}>
      {text}
    </h1>
  );
};

export default TextAtom;
