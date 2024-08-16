import "./UserSection.css";
import UserProfilePicture from "../atoms/user/UserProfilePicture";
import IconAtom from "../atoms/IconAtom";
import BellIcon from "../../assets/BellIcon";
import { useAuth } from "../../context/AuthContext";

const UserSection = () => {

  const { userProfilePicture } = useAuth();

  return (
    <div className="user-section">
      <IconAtom icon=<BellIcon/> />
      <UserProfilePicture userProfilePicture={userProfilePicture} />
    </div>
  );
};

export default UserSection;
