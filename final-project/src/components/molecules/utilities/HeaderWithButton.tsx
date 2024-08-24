import "./styles/HeaderWithButton.css";
import TextAtom from "../../atoms/typography/Text";
import ButtonAtom from "../../atoms/buttons/PrimaryButton";

interface HeaderWithButtonProps {
  title: string;
  onClick: () => void;
  fontSize?: string;
}

const HeaderWithButton = ({
  title,
  onClick,
  fontSize = "1.2rem",
}: HeaderWithButtonProps) => {
  return (
    <div className="header-with-button">
      <TextAtom text={title} fontSize={fontSize} />
      <ButtonAtom text="View all" onClick={onClick} />
    </div>
  );
};

export default HeaderWithButton;
