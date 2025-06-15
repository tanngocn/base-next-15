"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface InputProps {
  field?: ControllerRenderProps<FieldValues, string>;
  prefix?: ReactElement | undefined;
  suffix?: ReactElement | undefined;
  type: "text" | "password";
  placeholder?: string;
  classNames?: string;
  classInput?: string;
  max?: number;
  maxLength?: number;
  onChange?: (value?: string) => void;
}
export function InputText({
  prefix = undefined,
  suffix = undefined,
  field,
  classNames,
  max,
  maxLength = 255,
  placeholder,
  type = "text",
  onChange,
  classInput,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field?.onChange(e.target?.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center mt-0 rounded-[8px] h-11 text-white",
        classNames,
        {
          "pl-5 bg-background-input content-14": prefix,
          "pr-5 bg-black content-14": suffix,
        }
      )}
    >
      {prefix}
      <Input
        type={type}
        value={field?.value}
        className={cn(
          "bg-background-input border-0 w-full h-[42px] px-3",
          classInput
        )}
        placeholder={placeholder}
        onChange={handleChange}
        max={max}
        maxLength={maxLength}
      />
      {suffix}
    </div>
  );
}
