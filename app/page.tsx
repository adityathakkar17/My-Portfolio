"use client";

import React from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SectionDivider from "@/components/section-divider";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Home() {
  const { activeSection } = useActiveSectionContext();

  // Function to render the active section dynamically
  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Experience":
        return <Experience />;
      default:
        return <Intro />; // Default to Intro component
    }
  };

  return (
    <main className="flex flex-col items-center px-4">
      {renderSection()}
      <SectionDivider />
    </main>
  );
}
