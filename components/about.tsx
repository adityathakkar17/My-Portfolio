"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { FaSmileWink, FaWaveSquare } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me 👋</SectionHeading>
      <p className="mb-3">
      Hi there! I'm  {" "} <span className="font-bold">Aditya Thakkar</span>, a passionate software engineer with a flair 
      for creating innovative solutions. With a solid foundation in both front-end and back-end 
      technologies, I thrive on transforming complex challenges into seamless user experiences. 
      I am a former Software Engineer having worked {" "} @<span className="font-bold underline"><Link href="https://www.hhaexchange.com" target="_blank" rel="noopener noreferrer">
        HHAeXchange
      </Link></span>,  and @<span className="font-bold underline"><Link href="https://www.globallogic.com" target="_blank" rel="noopener noreferrer">
      GlobalLogic
      </Link></span> with over 
      1.5 years of experience in developing robust web applications using  {" "}
        <span className="font-medium">
        .NET Core, Angular and AWS.
        </span> 
      </p>

      <p>
      Currently pursuing my {" "}
      <span className="font-bold">Master's in Computer Science</span> at {" "}
      <span className="font-medium underline">California State University - Long Beach</span>.
      I'm passionate about tackling real-world challenges through innovative solutions. 
      When I'm not coding, you can find me diving into the latest tech trends or playing badminton. 
      Let's connect and build something amazing together!  
      </p>

      <p> 
      I am currently looking for {" "}
        <span className="font-medium">internship opportunities</span> for software
        developer.
      </p>

      
    </section>
  );
}
