import { Barlow_Condensed } from "next/font/google";
import React from "react";
import Headline from "./headline";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
type Props = {
  shortBio: string[];
  fullBio: any;
};

export default function Intro({shortBio,fullBio}: Props) {
  
  
  return (
    <article>
      <Headline title={"Introduction"} name={"home"} />

      <section>
        <h1
          className={`${barlow.className} text-[48px] lg:text-[96px] font-medium leading-tight p-4 lg:pt-0 lg:p-16`}
        >
          {/* Hi there, I am <br /> Full Stack Web Developer Based in,
          <span className="text-primary">Pakistan</span> */}
          {shortBio[0]}
        </h1>
        <div
          className={`${barlow.className} text-[20px] text-gray-400 font-normal py-4 px-16`}
        >
        <PortableText value={fullBio[0]} />
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row gap-5 justify-start p-4">
          <div className="w-full lg:w-[30%] text-center">
            <h3
              className={`${barlow.className} text-primary text-[62px] font-bold tracking-wide`}
            >
              +2
            </h3>
            <span
              className={`${barlow.className} text-[20px] text-gray-400 font-normal  tracking-wider`}
            >
              Years of Experience
            </span>
          </div>
          <div className="w-full lg:w-[30%] text-center">
            <h3
              className={`${barlow.className} text-primary text-[62px] font-bold tracking-wide`}
            >
              +150
            </h3>
            <span
              className={`${barlow.className} text-[20px] text-gray-400 font-normal  tracking-wider`}
            >
              Projects Completed
            </span>
          </div>
          <div className="w-full lg:w-[30%] text-center">
            <h3
              className={`${barlow.className} text-primary text-[62px] font-bold tracking-wide`}
            >
              +100
            </h3>
            <span
              className={`${barlow.className} text-[20px] text-gray-400 font-normal  tracking-wider`}
            >
              Satisfied Clients
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
