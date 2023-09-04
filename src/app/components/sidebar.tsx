"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Dancing_Script, Oswald } from "next/font/google";
import SocailItem from "./social-item";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import HireMeModel from "./hireme-model";
import CvModel from "./cv-model";
import { ProfileType, SocialLinksType } from "../../../types/common";
import { getProfile } from "../../../sanity/sanity.query";
import { set } from "react-hook-form";
import {  Mail, MapPin } from "lucide-react";

type Props = {};

const d_script = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Sidebar({}: Props) {
  const { setTheme } = useTheme();
  const [isChecked, setisChecked] = useState(false);
  const [profile, setProfile] = useState<ProfileType[]>([]);
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      const profile: ProfileType[] = await getProfile();
      setProfile(profile);
      const links: SocialLinksType[] = profile.map((item) => item.socialLinks);
      setGithub(links[0].github);
      //setInstagram(links[0].instagram);
      setLinkedin(links[0].linkedin);
      setTwitter(links[0].twitter);
    };
    getInfo();
  }, []);
  const toggleTheme = () => {
    isChecked ? setTheme("dark") : setTheme("light");
    setisChecked(!isChecked);
  };
  return (
    <Card className="lg:sticky lg:top-4 flex flex-col border-secondary">
      <CardHeader className="flex-none px-5 py-3">
        <div
          className={`${d_script.className} text-[24px] font-bold pb-2 flex justify-between items-center`}
        >
          <Link href={"/"}>ZeeFilio</Link>
          <div>
            <Switch onCheckedChange={toggleTheme} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-full w-[140px] h-[140px] overflow-clip">
            <Image
              src={profile.map((item) => item.profileImage.image)[0]}
              width={400}
              height={400}
              className="scale-150 ml-5"
              alt={profile.map((item) => item.profileImage.alt)[0]}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full py-1">
        <div className="text-center py-2 w-full">
          <h1 className={`${oswald.className} font-medium  text-[38px]`}>
            {profile.map((item) => item.fullName)}
          </h1>
          <h3
            className={`${oswald.className} text-primary font-normal tracking-wide text-[18px]`}
          >
            {profile.map((item) => item.headline)}
          </h3>
          <div className="py-2 pl-4 flex flex-col justify-center gap-2">
            <div className={`${oswald.className} text-[12px] text-gray-400 flex justify-start items-center gap-2`}>
            <Mail size={12}/> {profile.map((item) => item.email)}
            </div>
            <div className={`${oswald.className} text-[12px] text-gray-400 flex justify-start items-center gap-2`}>
              <MapPin size={12}/> {profile.map((item) => item.location)}
            </div>
          </div>
        </div>
        <ul className="flex justify-center gap-3 pt-2">
          <SocailItem link={"/"} name={"instagram"} />
          <SocailItem link={github} name={"github"} />
          <SocailItem link={linkedin} name={"linkedin"} />
          <SocailItem link={twitter} name={"twitter"} />
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-3 py-2 px-6 h-[25%]">
        <HireMeModel />
        <CvModel />
        <div className={`${oswald.className} pt-1 text-center text-[12px] text-gray-400`}>
          © 2023 ZeeFilio. All Rights Reserved
        </div>
      </CardFooter>
    </Card>
  );
}
