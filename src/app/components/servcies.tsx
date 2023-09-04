import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Headline from "./headline";

type Props = {};

export default function Services({}: Props) {
  return (
    <section className="w-full flex flex-col gap-2 my-3">
      <Headline title={"Services"} name={"gift"} />

      <Card>
        <CardHeader>
          <CardTitle className="text-[22px]">Full Stack Web Designs</CardTitle>
          <CardDescription>CEO of TechWizard</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-[22px]">Frontend Designs</CardTitle>
          <CardDescription>CEO of TechWizard</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-[22px]">UX/UI Designs</CardTitle>
          <CardDescription>CEO of TechWizard</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
}
