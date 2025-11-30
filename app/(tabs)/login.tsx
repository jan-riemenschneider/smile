import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login () {
  return (
    <SafeAreaView>
      <Button>
        <Text>Login</Text>
      </Button>
    </SafeAreaView>
  );
}
