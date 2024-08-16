import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LanguageLearning from "../organisms/LangagueLearning";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../context/AuthContext";
import UserProfile from "../molecules/UserProfile";
import LanguageSelector from "../molecules/LanguageSelector";

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
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Lyrics;