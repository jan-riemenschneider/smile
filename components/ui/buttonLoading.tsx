import { Icon } from '@/components/ui/icon';
import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

type ButtonProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> & {
    loading?: boolean;
    children: React.ReactNode | undefined;
  };

function LoadingButton({ className, loading, children, ...props }: ButtonProps) {
  return (
    <TextClassContext.Provider value="text-white text-sm font-medium">
      <Pressable
        className={cn(
          'group h-12 shrink-0 flex-row items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm shadow-black/5 active:bg-primary/90 sm:h-9',
          loading && 'opacity-50',
          className
        )}
        disabled={loading}
        role="button"
        {...props}>
        {loading && (
          <View className="pointer-events-none animate-spin">
            <Icon as={Loader2} className="text-white" />
          </View>
        )}
        {children}
      </Pressable>
    </TextClassContext.Provider>
  );
}

export { LoadingButton };
export type { ButtonProps };
