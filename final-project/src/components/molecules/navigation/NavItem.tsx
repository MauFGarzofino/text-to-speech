import { useNavigate } from "react-router-dom";
import IconAtom from "../../atoms/icons/IconAtom";
import HomeIcon from "../../../assets/HomeIcon";
import SearchIcon from "../../../assets/SearchIcon";
import BookIcon from "../../../assets/BookIcon";
import LyricsIcon from "../../../assets/LyricsIcon";

interface NavItemMoleculeProps {
  type: "home" | "search" | "vocabulary" | "lyrics";
  text: string;
}

const NavItemMolecule = ({ type, text }: NavItemMoleculeProps) => {
  const navigate = useNavigate();

  const renderIcon = () => {
    switch (type) {
      case "home":
        return <HomeIcon />;
      case "search":
        return <SearchIcon />;
      case "vocabulary":
        return <BookIcon />;
      case "lyrics":
        return <LyricsIcon />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    switch (type) {
      case "home":
        navigate("/home");
        break;
      case "search":
        navigate("/search");
        break;
      case "vocabulary":
        navigate("/vocabulary");
        break;
      case "lyrics":
        navigate("/lyrics");
        break;
      default:
        break;
    }
  };

  return (
    <div onClick={handleClick}>
      <IconAtom icon={renderIcon()} text={text} />
    </div>
  );
};

export default NavItemMolecule;
