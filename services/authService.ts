import { supabase } from '@/utils/supabase';
import { makeRedirectUri } from 'expo-auth-session';

export const authService = {
  signIn: async (email: string) => {
    const redirectTo = makeRedirectUri();

    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      return error;
    }
    return data;
  },

  getCurrentUser: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  },
};
