import React from "react";
import { ProfileType } from "../../../types/common";
import { Card } from "./ui/card";
import Image from "next/image";
type Props = {
  profile: ProfileType[];
};

export default function Hero({ profile }: Props) {
  return (
    <div className=" p-3 lg:p-8 container" >
      {profile &&
        profile.map((item: ProfileType) => {
          return (
            <div key={item._id}>
              <Card>
                <div className="flex flex-col items-center lg:flex-row gap-3 p-4">
                  <div className="w-[180px] h-[180px] overflow-hidden">
                    <div className="flex justify-center items-start w-full h-full rounded-full overflow-hidden">
                      <Image
                        className="bg-contain transform scale-150"
                        src={item.profileImage.image}
                        alt={item.profileImage.alt}
                        width={768}
                        height={1024}
                      />
                    </div>
                  </div>
                  <div className="flex-[80%]">
                    <h1 className="text-4xl font-bold">{item.fullName}</h1>
                    <p className="text-xl py-2">{item.headline}</p>
                    <p className="text-lg py-2">{item.shortBio}</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
