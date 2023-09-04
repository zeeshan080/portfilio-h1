import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import zeeshan from '@/assets/images/resume-zeeshan-23.jpg'

import Link from "next/link";

type Props = {};

export default function CvModel({}: Props) {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full rounded-full" variant={"outline"}>
            Download CV
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[800px] max-h-[600px] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="">

          <Image src={zeeshan} alt={""}/>
          </div>
          <DialogFooter>
            <Link className="bg-primary py-2 px-4 text-white rounded-full text-center " href= {'http://localhost:3000/assets/images/resume-zeeshan-23.pdf'}>Download CV</Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
