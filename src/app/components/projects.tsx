import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import profile from "@/assets/images/portfolio1.jpg";
import Image from "next/image";
import Headline from "./headline";

type Props = {};

export default function Projects({}: Props) {
  return (
    <section>
     
        <Headline title={"Projects"} name={"coffee"} />
    
      <Card>
        <CardHeader>
          <CardTitle className="text-[22px]">Zeeshan Aziz</CardTitle>
          <CardDescription>CEO of TechWizard</CardDescription>
        </CardHeader>
        <CardContent>
          <Image className="rounded-lg" src={profile} alt={""} />
        </CardContent>
        <CardFooter className="gap-3">
          <div className="text-white rounded-full w-28 bg-primary py-2 px-3 text-center">
            Reactjs
          </div>
          <div className="text-white rounded-full w-28 bg-primary py-2 px-3 text-center">
            Nextjs
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
