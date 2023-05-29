import React from "react";
import Portrait from "@/components/portrait";
import About from "@/components/about";
import Description from "@/components/description";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
        <Portrait />
        <Description />
        <About />
        <ContactForm />
    </main>
  )
}