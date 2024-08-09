interface UserProfileNameProps {
  userName: string | null;
}

const UserProfileName= ({ userName }: UserProfileNameProps) => {
  return <p>Welcome, {userName}</p>;
};

export default UserProfileName;
