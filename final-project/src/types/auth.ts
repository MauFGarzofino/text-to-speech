import { User } from "@supabase/supabase-js";
import { ReactNode } from 'react';

export interface AuthContextType {
    user: User | null;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
    userName: string | null;
    userProfilePicture: string | null;
}

export interface AuthContextProviderProps {
    children: ReactNode;
}