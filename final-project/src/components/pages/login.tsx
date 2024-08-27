import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ButtonAtom from "../atoms/buttons/PrimaryButton";
import TextAtom from "../atoms/typography/Text";
import "./login.css"

const LoginPage = () => {
  const { signInWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSignIn = async () => {
    await signInWithGoogle();
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="loginContainer">
      <TextAtom text="Login" fontSize="4rem" fontWeight="bold"/>
      <ButtonAtom text='Sign In With Google' onClick={handleSignIn}/>
    </div>
  );
};

export default LoginPage;
