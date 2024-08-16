import "./ProfileImage.css";

interface UserProfilePictureProps {
  userProfilePicture: string | null;
  userName?: string | null;
}

const UserProfilePicture = ({ userProfilePicture, userName }: UserProfilePictureProps) => {
  return (
    userProfilePicture ? (
      <img src={userProfilePicture} alt={`${userName}'s profile`} className="profile-image"/>
    ) : null
  );
};

export default UserProfilePicture;