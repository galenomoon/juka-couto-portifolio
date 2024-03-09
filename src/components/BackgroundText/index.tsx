import React from "react";
import { motion } from "framer-motion";
import AnimateInView from "../AnimateInViewport";

export default function BackgroundText({
  children,
  className,
  lines = "background text",
  white,
}: {
  children?: string;
  className?: string;
  lines?: string | string[];
  white?: boolean;
}) {
  const text = children?.split(" ") || lines;

  return (
    <AnimateInView
      direction="Y"
      inverse
      className={`${
        white ? "!opacity-20" : ""
      } z-0 w-screen bottom-40 items-center select-none justify-center text-center font-bold self-center panchang leading-[8vw] text-[#fff]/30 ${className}`}
    >
      <motion.p className="text-[9.30vw] uppercase z-0 w-full whitespace-nowrap">
        {text[0]}
      </motion.p>
      <motion.p className="text-[8.20vw] uppercase z-0 w-full whitespace-nowrap">
        {text[1]}
      </motion.p>
    </AnimateInView>
  );
}
