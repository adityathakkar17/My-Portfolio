"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technologies I frequently use</SectionHeading>
      <ul className="grid grid-cols-5 justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="relative group bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            // Hover effect
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Skill icon */}
            {React.createElement(skill.icon, { size: 48 })}

            {/* Tooltip (Label) on top */}
            <span className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-semibold text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
