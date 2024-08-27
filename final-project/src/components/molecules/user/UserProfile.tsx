import UserProfileName from "../../atoms/user/UserProfileName";
import UserProfilePicture from "../../atoms/user/UserProfilePicture"; 

interface UserProfileProps {
  userName: string | null;
  userProfilePicture: string | null;
}

const UserProfile = ({ userName, userProfilePicture }: UserProfileProps) => {
  return (
    <div>
      <UserProfileName userName={userName} />
      <UserProfilePicture userProfilePicture={userProfilePicture} userName={userName} />
    </div>
  );
};

export default UserProfile;
