import React from "react";
import Portrait from "@/components/portrait";
import About from "@/components/about";
import Description from "@/components/description";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <main className="flex flex-col sm:p-24 p-10">
        <Portrait />
        <Description />
        <About />
        <ContactForm />
    </main>
  )
}