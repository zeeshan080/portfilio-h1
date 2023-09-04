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

export default function TestimonialCards({}: Props) {
  return (
    <section>
      <Headline title={"Testimonials"} name={"quote"} />
      <div className="p-5 flex justify-center">
        <Card className="w-full lg:w-[70%]">
          <CardHeader>
            <CardTitle className="text-[22px]">Zeeshan Aziz</CardTitle>
            <CardDescription>CEO of TechWizard</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              “A Developer with the creativity, professional and master of code.
              Much more than what i'm expect. High quality product & flexiable
              price. Recommended!.”
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
