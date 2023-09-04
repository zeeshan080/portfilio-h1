import { getProfile } from "../../../sanity/sanity.query";
import { ProfileType } from "../../../types/common";
import Intro from "../components/Intro";
import ContactMe from "../components/contact-me";
import Projects from "../components/projects";
import Services from "../components/servcies";
import TestimonialCards from "../components/testimonial-cards";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();
 
  return (
    <>
    <Intro shortBio = {profile.map((item)=> item.shortBio)} fullBio= {profile.map((item)=> item.fullBio)}/>
    <Services/>
    <Projects/>
    <TestimonialCards/>
    <ContactMe/>
   </>
  )
}
