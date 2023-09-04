import React from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Coffee, Gift, Home, Mail, Quote, User } from "lucide-react";
import Link from "next/link";
import Icon from "./icon";
import SideMenuItem from "./sidemenu-item";

type Props = {};

export default function SideMenu({}: Props) {
  return (
    <Card className="h-[55vh] sticky top-[25%] flex items-center justify-center rounded-full">
      <CardContent className="p-0">
        <ul className="flex gap-6 flex-col">
          <SideMenuItem name={"home"} title={"Home"} link={"/"} />
          <SideMenuItem name={"user"} title={"Resume"} link={"/resume"} />
          <SideMenuItem name={"gift"} title={"Services"} link={"/services"} />
          <SideMenuItem name={"coffee"} title={"Projects"} link={"/projects"} />
          <SideMenuItem
            name={"quote"}
            title={"Testimonial"}
            link={"/testimonial"}
          />
          <SideMenuItem name={"mail"} title={"Contact"} link={"/contact"} />
        </ul>
      </CardContent>
    </Card>
  );
}
