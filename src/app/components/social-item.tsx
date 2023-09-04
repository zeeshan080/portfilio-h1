import Link from "next/link";
import React from "react";
import Icon from "./icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type Props = {
  link: string;
  name: keyof typeof dynamicIconImports;
};

export default function SocailItem({ link, name }: Props) {
    
  return (  
    <li className="rounded-full p-2 border-[2px] hover:bg-primary group">
      <Link href={link} target="_blank">
        <Icon name={name} className="stroke-primary group-hover:stroke-primary-foreground" />
      </Link>
    </li>
  );
}
