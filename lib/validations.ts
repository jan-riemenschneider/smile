import { z } from 'zod';

export const emailSchema = z.object({
  email: z.email('Ungültige Email-Adresse'),
});
export type EmailFormData = z.infer<typeof emailSchema>;
