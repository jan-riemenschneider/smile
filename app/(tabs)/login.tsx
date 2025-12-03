import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { emailSchema } from '@/lib/validations';
import { authService } from '@/services/authService';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: { email: string }) => {
    setLoading(true);
    try {
      await authService.signIn(data.email);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-end px-4">
      <View className="flex gap-2">
        <Input name="email" control={control} errors={errors}></Input>

        <Button onPress={handleSubmit(onSubmit)} loading={loading}>
          <View className="pointer-events-none animate-spin">
            <Icon as={Loader2} className="text-primary-foreground" />
          </View>
          <Text>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
