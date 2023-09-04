import dynamicIconImports from "lucide-react/dynamicIconImports";
import React from "react";
import Icon from "./icon";

type Props = {
  title: string;
  name: keyof typeof dynamicIconImports;
};

export default function Headline({ title, name }: Props) {
  return (
    <div className="mt-6 mb-3 rounded-full border-[1px] py-2 px-3 text-center w-[60%] lg:w-[20%]">
      <h1 className="flex justify-center items-center gap-3">
        <Icon name={name} cSize={16}/> 
        <span className="text-[16px]">{title}</span>
      </h1>
    </div>
  );
}
