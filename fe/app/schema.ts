import { z } from 'zod';
export const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
});
export type Schema = z.infer<typeof schema>;
