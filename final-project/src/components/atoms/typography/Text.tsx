import "./styles/Text.css";

interface TextProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const TextAtom = ({ text, fontSize = "1.125rem", fontWeight = "bold", color = "#ffffff" }: TextProps) => {
  return (
    <h1 className="text-atom" style={{ fontSize, fontWeight, color }}>
      {text}
    </h1>
  );
};

export default TextAtom;
