import { supabase } from '@/utils/supabase';
import { makeRedirectUri } from 'expo-auth-session';

export const authService = {
  signIn: async (email: string) => {
    const redirectTo = makeRedirectUri();

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: redirectTo,
        },
      });

      if (error) {
        console.log('Returning error message:', error);
        }

      return data;
    } catch (e) {
      console.log('Caught exception:', e);
      throw e;
    }
  },

  getCurrentUser: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  },
};
