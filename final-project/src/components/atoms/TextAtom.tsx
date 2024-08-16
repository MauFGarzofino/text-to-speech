import "./TextAtom.css";

interface TextAtomProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const TextAtom = ({ text, fontSize = "18px", fontWeight = "bold", color = "#ffffff" }: TextAtomProps) => {
  return (
    <h1 className="text-atom" style={{ fontSize, fontWeight, color }}>
      {text}
    </h1>
  );
};

export default TextAtom;
