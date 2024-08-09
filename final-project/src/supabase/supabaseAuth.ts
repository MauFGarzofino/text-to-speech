import { supabase } from "./supabaseClient";
import { User } from "@supabase/supabase-js";

export async function signInWithGoogle() {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw new Error("Error en el SignIn");
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error("Error en el SignOut");
  } catch (error) {
    console.log(error);
  }
}

export async function checkUserSession(setUser: (user: User | null) => void, setUserName: (name: string | null) => void, setUserProfilePicture: (url: string | null) => void) {
  const { data } = await supabase.auth.getSession();
  if (data.session?.user) {
    setUser(data.session.user);
    setUserName(data.session.user.user_metadata?.full_name || null);
    setUserProfilePicture(data.session.user.user_metadata?.avatar_url || null);
  }
}