"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { myProcess } from "@/data";
import { TracingBeam } from "./ui/tracing-beam";

export default function MyProcess() {
  return (
    <div className="px-4 py-10">
      <TracingBeam className="px-4">
        <h2 className="heading pb-10">
          My <span className="text-purple">Process</span>
        </h2>
        <StickyScroll content={myProcess} />
      </TracingBeam>
    </div>
  );
}
