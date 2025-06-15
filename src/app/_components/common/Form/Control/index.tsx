"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import React, { FC, ReactElement } from "react";
import { useFormContext } from "react-hook-form";

interface IFormItemProps {
  children: ReactElement<{ field?: unknown }>;
  description?: string;
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

const FormControlItem: FC<IFormItemProps> = ({
  children,
  required = false,
  label,
  name,
  description,
  className,
}) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          {label && (
            <FormLabel className="capitalize block text-left content-14 mb-[2px] ">
              {label}
              {required ? <span className="text-status-red"> *</span> : null}
            </FormLabel>
          )}
          <FormControl>{React.cloneElement(children, { field })}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage className="!mt-[0px] text-[#ff0000]" />
        </FormItem>
      )}
    />
  );
};

export default FormControlItem;
