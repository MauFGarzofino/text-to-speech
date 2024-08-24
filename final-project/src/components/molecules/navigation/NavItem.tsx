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

  return <IconAtom icon={renderIcon()} text={text} />;
};

export default NavItemMolecule;
