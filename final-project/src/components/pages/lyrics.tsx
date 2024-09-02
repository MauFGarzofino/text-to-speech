import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LanguageLearning from "../organisms/content/LanguageLearning";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../context/AuthContext";
import UserProfile from "../molecules/user/UserProfile";
import LanguageSelector from "../molecules/navigation/LanguageSelector";
import ButtonAtom from "../atoms/buttons/PrimaryButton";

const Lyrics = () => {
  const { userName, userProfilePicture, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Text-to-Speech</h1>
      <LanguageSelector />
      <LanguageLearning />
      <UserProfile userName={userName} userProfilePicture={userProfilePicture} />
      <ButtonAtom text="Sign Out" onClick={handleSignOut}/>
    </div>
  );
};

export default Lyrics;