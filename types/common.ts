// types/index.ts

import { PortableTextBlock } from "sanity";

export type SocialLinksType = {
  github: string,
  linkedin: string,
  twitter: string,
  twitch: string,
};

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  socialLinks: SocialLinksType,
  skills: string[],
};