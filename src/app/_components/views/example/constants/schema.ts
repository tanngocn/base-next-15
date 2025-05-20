import { z } from 'zod';

export const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Invalid Email',
    })
    .email('Error: Invalid Email'),
});
