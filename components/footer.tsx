import { motion } from "framer-motion";
import React from "react";
import { BsLinkedin, BsMailbox } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiMailOpen, HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
      <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/adityathakkar17"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/adityathakkar17"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="mailto:adityathakkar33@gmail.com"
          target="_blank"
        >
          <HiOutlineMail />
        </a>
        </div>
    </footer>
  );
}
