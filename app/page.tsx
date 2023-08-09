import React from "react";
import Portrait from "@/components/portrait";
import About from "@/components/about";
import Description from "@/components/description";
import ContactForm from "@/components/contactForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Celestine Tan</title>
        <meta 
          name="description" 
          content="Hi, I am Celestine Tan, at current Computer Science undergraduate at National University of Singapore (NUS)! " 
        />
        <meta
          name="keywords"
          content="Celestine Tan, Celestine Tan Yen Tong, personal website, nus, computer science undergraduate"
        />
      </Head>
      <div className="flex flex-col sm:p-24 p-10">
        <Portrait />
        <Description />
        <About />
        <ContactForm />
      </div>
    </>
  )
}