import { supabase } from "./supabaseClient";
import { User } from "@supabase/supabase-js";

export async function signInWithGoogle() {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw new Error("SignIn Error");
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error("SignOut Error");
  } catch (error) {
    console.log(error);
  }
}

export async function checkUserSession(
  setUser: (user: User | null) => void,
  setUserName: (name: string | null) => void,
  setUserProfilePicture: (url: string | null) => void
) {
  const { data } = await supabase.auth.getSession();

  if (data.session?.user) {
    const user = data.session.user;
    setUser(user);
    setUserName(user.user_metadata?.full_name || null);
    setUserProfilePicture(user.user_metadata?.avatar_url || null);

    // Check if the user already exists in your Supabase table
    const { data: existingUser, error: selectError } = await supabase
      .from('app_users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (selectError && selectError.code === 'PGRST116') {
      // User does not exist, so create it
      const { error: insertError } = await supabase.from('app_users').insert({
        id: user.id,
        full_name: user.user_metadata?.full_name,
        avatar_url: user.user_metadata?.avatar_url,
        email: user.email,
        created_at: new Date(),
        updated_at: new Date(),
      });

      if (insertError) {
        console.error('Error creating the user:', insertError);
      }
    } else if (selectError) {
      console.error('Error checking the user:', selectError);
    } else {
      console.log('User already exists in the database:', existingUser);
    }
  }
}
