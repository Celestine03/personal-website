import React from "react";
import Portrait from "@/components/portrait";
import About from "@/components/about";
import Description from "@/components/description";

export default function Homepage() {
    return (
      <main className="flex flex-col p-24">
          <Portrait />
          <Description />
          <About />
      </main>
    )
  }