import { AppLogo, Icons } from "@/components/Icons";
import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <nav className="flex flex-col w-[80px] gap-2 h-screen py-5">
      <div className="h-[50px]">
        <Image
          src={AppLogo}
          width={"500"}
          height={"500"}
          alt="applogo"
          className="w-[35px] h-[35px] mx-auto"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center icon-bg-active items-center h-[70px]">
        <Image src={Icons.Folder} width={"100"} height={"100"} className="h-[30px] w-[30px]" alt="" />
        <p className="text-xs">Media</p>
      </div>
      <div className="flex flex-col gap-2 justify-center  icon-bg-inactive items-center h-[70px]">
        <Image src={Icons.Text} width={"100"} height={"100"} className="h-[30px] w-[30px]" alt="" />
        <p className="text-xs">Text</p>
      </div>
      <div className="flex flex-col gap-2 justify-center   icon-bg-inactive items-center h-[70px]">
        <Image src={Icons.Music} width={"100"} height={"100"} className="h-[30px] w-[30px]" alt="" />
        <p className="text-xs">Audio</p>
      </div>
      <div className="flex flex-col gap-2 justify-center   icon-bg-inactive items-center h-[70px]">
        <Image src={Icons.Transition} width={"100"} height={"100"} className="h-[30px] w-[30px]" alt="" />
        <p className="text-xs">Transition</p>
      </div>
      <div className="flex flex-col gap-2 justify-center   icon-bg-inactive items-center h-[70px]">
        <Image src={Icons.Layout} width={"100"} height={"100"} className="h-[30px] w-[30px]" alt="" />
        <p className="text-xs">Layout</p>
      </div>
    </nav>
  );
};

export default SideBar;
