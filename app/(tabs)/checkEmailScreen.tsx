import { LoadingButton } from '@/components/ui/buttonLoading';
import { Text } from '@/components/ui/text';
import { authService } from '@/services/authService';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from 'sonner-native';

export default function CheckEmailScreen() {
  const [loading, setLoading] = useState(false);
  const { email } = useLocalSearchParams();

  const resend = async () => {
    setLoading(true);
    try {
      await authService.signIn(email as string);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      toast('E-Mail erfolgreich versendet!😉');
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center px-4">
      <View className="flex items-center gap-5">
        <Text variant="large">Check your email</Text>
        <Text variant="muted">{`We sent a magic link to ${email}`}</Text>
      </View>
      <LoadingButton className="mt-4" onPress={() => resend()} loading={loading}>
        <Text>Resend</Text>
      </LoadingButton>
    </SafeAreaView>
  );
}
