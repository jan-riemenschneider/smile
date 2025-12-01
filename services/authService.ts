import { emailSchema } from '@/lib/validations';
import { supabase } from '@/utils/supabase';
import { makeRedirectUri } from 'expo-auth-session';

export const authService = {
  signIn: async (email: string) => {
    const redirectTo = makeRedirectUri();

    const validatedData = emailSchema.safeParse({ email });
    
    if (!validatedData.success) {
      const firstError = validatedData.error.issues[0];
      return firstError.message;
    }

    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      throw error;
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
