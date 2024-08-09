import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";
import { AuthContextType, AuthContextProviderProps } from "../types/auth";
import { User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import {
  signInWithGoogle,
  signOut,
  checkUserSession,
} from "../supabase/supabaseAuth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [userProfilePicture, setUserProfilePicture] = useState<string | null>(
    null
  );
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      await checkUserSession(setUser, setUserName, setUserProfilePicture);

      const { data: authListener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          if (session?.user) {
            setUser(session.user);
            setUserName(session.user.user_metadata?.full_name || null);
            setUserProfilePicture(
              session.user.user_metadata?.avatar_url || null
            );
          } else {
            setUser(null);
            setUserName(null);
            setUserProfilePicture(null);
            navigate("/login", { replace: true });
          }
        }
      );

      return () => {
        authListener.subscription.unsubscribe();
      };
    };

    initAuth();
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signOut, userName, userProfilePicture }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthContextProvider");
  }
  return context;
};
