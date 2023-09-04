"use client";
import React from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import FormInput from "./form-input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import Headline from "./headline";

type Props = {};

export default function ContactMe({}: Props) {
  const form = useForm();
  return (
    <section>
      <Headline title={"Contact Me"} name={"mail"} />
      <Form {...form}>
        <form>
          <div className="flex justify-between gap-6 ">
            <FormInput
              label={"Name"}
              type={"text"}
              placeholder={"Enter Your Name"}
              required
            />
            <FormInput
              label={"Email"}
              type={"email"}
              placeholder={"Enter Your Email"}
              required
            />
          </div>
          <div className="flex justify-between gap-6 ">
            <FormInput
              label={"Phone Number"}
              type={"text"}
              placeholder={"Enter Phone Number"}
            />
            <FormInput
              label={"Subject"}
              type={"text"}
              placeholder={"Enter Subject"}
              required
            />
          </div>
          <div className="w-full">
            <FormInput
              label={"Budget"}
              type={"text"}
              placeholder={"Enter Your Budget..."}
            />
          </div>
          <div className="w-full">
            <FormInput
              label={"Message"}
              type={"text"}
              placeholder={"Write Your message..."}
              textArea={true}
            />
          </div>
          <div className="float-right mt-2">
            <Button className="rounded-full h-10 w-28">
              <Send size={16} className="mr-1" /> Send
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
