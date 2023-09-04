import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  textArea?: boolean;
};

export default function FormInput({
  label,
  type,
  placeholder,
  required = false,
  textArea = false,
}: Props) {
  return (
    <FormField
      //control={username}
      name="..."
      render={({ field }) => (
        <FormItem className="w-full py-2">
          <FormLabel>
            {label} {required ? "*" : ""}
          </FormLabel>
          <FormControl>
            {textArea ? (
              <Textarea
                placeholder={placeholder}
                {...field}
                required={required}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                required={required}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
