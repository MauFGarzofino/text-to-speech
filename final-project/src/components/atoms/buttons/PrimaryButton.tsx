import "./styles/ButtonAtom.css";

interface ButtonAtomProps {
  text: string;
  onClick: () => void;
}

const ButtonAtom = ({ text, onClick }: ButtonAtomProps) => {
  return (
    <button className="button-atom" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonAtom;
