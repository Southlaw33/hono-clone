import Image from "next/image";
import Link from "next/link";
import React from "react";
import HonoSvg from "@/assets/svgs/hono.svg";
const NavigationBar = (props:{className?:string}) => {
  return (
    <div className={`container mx-auto py-6 ${props.className ? props.className : ""}`}>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-6">
            <Image src={HonoSvg} alt="Hono" />
          </div>
          <span className="text-2xl font-bold">Hono</span>
        </div>
        <div>
          <nav className="flex flex-row gap-8 items-center font-bold">
            <Link href="/docs">Docs</Link>
            <Link href="/examples">Examples</Link>
            <Link href="discussions">Discussions</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
