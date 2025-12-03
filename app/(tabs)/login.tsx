import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { EmailFormData, emailSchema } from '@/lib/validations';
import { authService } from '@/services/authService';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from 'sonner-native';

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<EmailFormData> = (data) => {
    toast('Hello, World!');
    console.log(data);
    authService.signIn(data.email);
  };

  return (
    <SafeAreaView className="flex-1 justify-end px-4">
      <View className="flex gap-2">
        <Input name="email" control={control} errors={errors}></Input>
        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
