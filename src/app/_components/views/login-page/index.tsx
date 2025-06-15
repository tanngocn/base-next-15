"use client";

import { login } from "@/app/login/page";
import FormControlItem from "@/components/common/Form/Control";
import { InputText } from "@/components/common/Form/InputText";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const LoginView = () => {
  const methods = useForm({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(
      z.object({
        username: z
          .string({ required_error: "username is required" })
          .min(1, { message: "username is required" }),
        password: z
          .string({ required_error: "password is required" })
          .min(1, { message: "password is required" }),
      })
    ),
    mode: "all",
  });
  const { handleSubmit } = methods || {};

  const onSubmit = async (values: { username: string; password: string }) => {
    await login(values);
  };

  return (
    <div className="login-page max-w-[500px] mx-auto border border-white p-4 rounded-[8px]">
      <h2 className="text-[20px] text-center mb-4">Login Page</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormControlItem
            label="Username"
            name="username"
            required
            className="flex flex-col gap-1"
          >
            <InputText type="text" classInput="border border-white" />
          </FormControlItem>
          <FormControlItem
            label="Password"
            name="password"
            required
            className="flex flex-col gap-1"
          >
            <InputText type="password" classInput="border border-white" />
          </FormControlItem>
          <Button>Login</Button>
        </form>
      </FormProvider>
    </div>
  );
};
export default LoginView;
