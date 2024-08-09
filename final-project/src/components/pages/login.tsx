import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Login</h1>
      <button onClick={handleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default LoginPage;
