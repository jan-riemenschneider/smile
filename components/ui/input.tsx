import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Controller, FieldErrors } from 'react-hook-form';
import { Platform, TextInput, type TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  control: any;
  name: string;
  required?: boolean;
  errors?: FieldErrors;
};

function Input({
  className,
  control,
  required = true,
  errors,
  name,
  ...props
}: InputProps & React.RefAttributes<TextInput>) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className={cn(
              's flex h-12 w-full min-w-0 flex-row items-center rounded-md border border-input bg-background px-3 py-1 text-base leading-5 text-foreground shadow-sm shadow-black/5 dark:bg-input/30 sm:h-9',
              props.editable === false &&
                cn(
                  'opacity-50',
                  Platform.select({
                    web: 'disabled:pointer-events-none disabled:cursor-not-allowed',
                  })
                ),
              Platform.select({
                web: cn(
                  'outline-none transition-[color,box-shadow] selection:bg-primary placeholder:text-muted-foreground md:text-sm',
                  'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
                ),
                native: 'placeholder:text-muted-foreground/50',
              }),
              className,
              cn(errors ? 'border-destructive' : null)
            )}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
      />
      {errors && <Text variant="error">{errors[name]?.message?.toString()}</Text>}
    </>
  );
}
export { Input };
