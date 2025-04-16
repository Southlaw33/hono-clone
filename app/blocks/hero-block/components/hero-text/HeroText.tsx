"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HeroText = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-6xl font-black">
        <span className="text-orange-500">Hono</span>
        <br /> Web application
        <br />
        framework
      </h1>
      <p className="text-2xl text-slate-400 mt-4">
        Fast, lightweight, built on Web Standards. Support for any JavaScript
        runtime.
      </p>
      <div className="flex flex-row justify-start mt-8 gap-4">
        <button
          className="btn btn-soft rounded-full btn-lg bg-orange-500 hover:bg-orange-700"
          onClick={() => {
            router.push("https://hono.dev/");
          }}
        >
          Get Started
        </button>
        <button
          className="btn btn-soft rounded-full btn-lg"
          onClick={() => {
            router.push("https://github.com/honojs/hono");
          }}
        >
          View on Github
        </button>
      </div>
    </div>
  );
};

export default HeroText;
