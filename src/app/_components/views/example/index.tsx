'use client';

import { useActionState, startTransition } from 'react';
import { create } from './actions';
import { Button } from '@/components/ui/button';
import { InputText } from '../../common/Form/InputText';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormControlItem from '@/components/common/Form/Control';
import { schema } from './constants/schema';
import { toast } from 'sonner';
import { toastSuccess } from '@/hooks/useToast';
const ExampleForm = () => {
  const methods = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(schema),
    mode: 'all',
  });
  const { handleSubmit } = methods;
  const [, formAction, pending] = useActionState(create, undefined);

  const onSubmit = (data: any) => {
    startTransition(() => {
      formAction(data);
    });
  };

  return (
    <FormProvider {...methods}>
      <button onClick={() => toastSuccess('My first toast')}> hehe</button>
      <form onSubmit={handleSubmit(onSubmit)} className="border border-white max-w-[400px] p-4 rounded-sm text-center">
        <h2 className="text-[28px] mb-4">Form title</h2>
        <div className="flex flex-col gap-4">
          <FormControlItem name="email" label="Email" required>
            <InputText placeholder="Enter Email" />
          </FormControlItem>
          <Button disabled={pending} variant={'default'} type="submit">
            {pending ? 'Sending...' : 'Sign up'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ExampleForm;
