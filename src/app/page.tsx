"use client"
import { Icons, IllustrationImage } from "@/components/Icons";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgArrowsExpandRight } from "react-icons/cg";
import { useState } from "react";


export default function Home() {
  const [isHovered, setHovered] = useState(false);
  return (
    <main className="flex flex-col w-full min-h-screen max-h-screen">
      <div className="flex flex-1 w-full">
        <div className="w-2/6 h-full media-container py-5 px-5 relative flex flex-col gap-5">
          <div className="flex gap-3 items-center text-sm">
            <p className="icon-bg-active">All</p>
            <p className="icon-bg-inactive">Videos</p>
            <p className="icon-bg-inactive">Audios</p>
            <p className="icon-bg-inactive">Images</p>
          </div>
          <button className="media-import-button">Import Media</button>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-2 items-center">
              <Image src={IllustrationImage} width={500} height={500} alt="" className="w-[140px] h-[140px]" />
              <p className="text-xs text-center text-[var(--theme-gray-2)]">
                Drag and drop your media from your device to import
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col justify-between px-5 gap-2">
          <div className="flex justify-between items-center py-4">
            <div className="text-white text-sm font-semibold">
              <p>Untitled Project</p>
            </div>
            <button className="media-export-button flex items-center justify-center gap-1">Export <MdKeyboardArrowDown className="text-2xl" /></button>
          </div>
          <div className="h-[100%] flex justify-center items-center">
            <div className="w-4/6 h-full bg-[var(--theme-gray-1)]"></div>
          </div>
          <div className="py-4">
            <div className="flex h-full justify-center items-center text-[var(--theme-gray-1)] gap-4 text-2xl relative">
              <IoPlayBack className="text-3xl hover:cursor-pointer" />
              <FaPlay className="hover:cursor-pointer" />
              <IoPlayForward className="text-3xl hover:cursor-pointer" />
              <CgArrowsExpandRight className="absolute right-[17%] hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-2/6 w-full px-5 border-t border-t-[--theme-gray-2]">
        <div className="flex flex-col w-full">
          <div className="w-full flex items-center justify-between py-3">
            <div className="flex items-center gap-4 w-2/6">
              <Image src={!isHovered ? Icons.UndoIcon : Icons.UndoIconActive} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={!isHovered ? Icons.RedoIcon : Icons.RedoIconActive} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={Icons.CutIcon} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={Icons.Clone} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={Icons.MoveUpIcon} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={Icons.MoveDown} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={Icons.DeleteIcon} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
            </div>
            <div className="w-2/6">
              <p className="text-white text-xs text-center">00:00:00 / 00:15:00</p>
            </div>
            <div className="flex items-center gap-4 w-2/6 justify-end">
              <Image src={Icons.ZoomIn} width={"100"} height={"100"} className="h-[12px] w-[12px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={Icons.ZoomOut} width={"100"} height={"100"} className="h-[15px] w-[15px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
              <Image src={Icons.FitIcon} width={"100"} height={"100"} className="h-[18px] w-[18px] edit-icons" alt="" onMouseEnter={() => {
                setHovered(true)
              }} onMouseLeave={() => {
                setHovered(false)
              }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
