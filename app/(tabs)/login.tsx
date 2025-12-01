import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { emailSchema } from '@/lib/validations';
import { authService } from '@/services/authService';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView className="flex-1 justify-end px-4">
      <View className="flex gap-4">
        <form onSubmit={onSubmit}>
          <Input onChangeText={setEmail} placeholderClassName="Deine Email"></Input>
          {error && <Text className="text-red-700">{error}</Text>}
        </form>
        <Button onPress={() => authService.signIn(email)}>
          <Text>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
