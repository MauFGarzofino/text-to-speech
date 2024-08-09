import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LanguageLearning from "../organisms/LangagueLearning";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../context/AuthContext";
import UserProfile from "../molecules/UserProfile";
import LanguageSelector from "../molecules/LanguageSelector";
import "../../App.css"

const HomePage = () => {
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
    <div>
      <h1>Text-to-Speech</h1>
      <LanguageSelector />
      <LanguageLearning />
      <UserProfile userName={userName} userProfilePicture={userProfilePicture} />
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default HomePage;
