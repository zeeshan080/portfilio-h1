"use client";
import Link from "next/link";
import React from "react";
import Icon from "./icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type Props = {
  name: keyof typeof dynamicIconImports;
  title: string;
  link: string;
};

export default function SideMenuItem({ name, link, title }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <li>
            <Link href={link}>
              <Icon name={name} />
            </Link>
          </li>
        </TooltipTrigger>
        <TooltipContent side="left">{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
